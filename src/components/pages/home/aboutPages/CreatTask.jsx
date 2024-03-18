import { Box, Button, FormControl, Input, Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCategoriesData from "./creatCategories/creatCatFunc";
import { Spin } from "antd";

const CreatTask = () => {
    const { categories } = useSelector((state) => state.categories);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [categoriesId, setCategoriesId] = useState("");
    const [loadingCreat, setLoadingCreat] = useState(false);
    async function creatTask(e) {
        e.preventDefault();
        let data = {
            category_id: categoriesId,
            task: title,
            description: description,
        };

        await fetch("https://todo.de-code.uz/api/tasks", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("todo-token"),
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                setTitle("");
                setLoadingCreat(false);
            })
            .catch((err) => {
                setLoadingCreat(false);
            });
    }

    useEffect(() => {
        getCategoriesData(dispatch);
    }, []);
    return (
        <>
            <Box width={"80%"} marginX={"auto"} padding={"10px"}>
                <form
                    onSubmit={(e) => {
                        creatTask(e);
                    }}
                >
                    <Box
                        display={"grid"}
                        gridTemplateColumns={
                            "repeat(auto-fill, minmax(250px, 1fr))"
                        }
                        alignItems={"center"}
                        gap={"5px"}
                    >
                        <FormControl>
                            <Input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                placeholder="Введите называние задачи"
                                required
                            />
                        </FormControl>
                        <FormControl>
                            <Input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                placeholder="Введите описанию задачи"
                                required
                            />
                        </FormControl>
                        <Select
                            required
                            onChange={(e) => {
                                setCategoriesId(e.target.value);
                                console.log(e.target.value);
                                console.log(categoriesId)
                            }}
                        >
                            {categories.data?.map((element) => (
                                <option key={element.id} value={element.id}>
                                    {element.name}
                                </option>
                            ))}
                        </Select>
                        <Spin
                            spinning={loadingCreat}
                            delay={500}
                            className="w-full"
                        >
                            <Button
                                width={"100%"}
                                display={"flex"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                padding={"10px"}
                                background={"dodgerblue"}
                                border={"1px solid transparent"}
                                textColor={"white"}
                                type="submit"
                                _hover={{
                                    background: "dodgerblue",
                                    border: "1px solid blue",
                                }}
                                _active={{ opacity: "0.5" }}
                                onClick={() => setLoadingCreat(true)}
                            >
                                СОЗДАТЬ
                            </Button>
                        </Spin>
                    </Box>
                </form>
            </Box>
        </>
    );
};

export default CreatTask;
