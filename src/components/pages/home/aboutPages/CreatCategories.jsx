import { Box, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import headers from "../../../config/authHeaderBearer";
import { getCategories } from "../../../../store/todoSlice";
import { Spin } from "antd";

const CreatCategories = () => {
    const [loadingCreat, setLoadingCreat] = useState(false);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    function creatCategories(e) {
        e.preventDefault();
        let data = {
            name: inputValue,
        };
        fetch("https://todo.de-code.uz/api/categories", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer " + localStorage.getItem("todo-token"),
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                setLoadingCreat(false);
            });
        setInputValue("");
    }

    return (
        <>
            <Box width={"80%"} marginX={"auto"}>
                <form
                    onSubmit={(e) => {
                        creatCategories(e);
                        setLoadingCreat(true);
                    }}
                >
                    <Box display={"flex"} alignItems={"center"} gap={"5px"}>
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            type={"text"}
                            placeholder="Создай категорию"
                        />
                        <Spin
                            spinning={loadingCreat}
                            delay={500}
                        >
                            <Button
                                type="submit"
                                background={"dodgerblue"}
                                border={"2px solid transparent"}
                                textColor={"white"}
                                _hover={{
                                    border: "2px solid blue",
                                    background: "dodgerblue",
                                }}
                                _active={{ opacity: "0.5" }}
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

export default CreatCategories;
