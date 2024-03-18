import { BsTrashFill } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { Box, IconButton, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../../store/todoSlice";
import headers from "../../../config/authHeaderBearer";
import { Spin } from "antd";
import getCategoriesData from "./creatCategories/creatCatFunc";

const Categories = () => {
    const [loadingDelete, setLoadingDelete] = useState(false);
    const { categories } = useSelector((state) => state.categories);
    const [idEl, setIdEl] = useState()
    const dispatch = useDispatch();
    // const getCategoriesData = () => {
    //     fetch("http://todo.de-code.uz/api/categories", {
    //         method: "GET",
    //         headers: headers(),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             dispatch(getCategories(data));
    //         });
    // };

    const deleteCategories = (id) => {
        setIdEl(id)
        fetch(`http://todo.de-code.uz/api/categories/${id}`, {
            method: "DELETE",
            headers: headers(),
        })
            .then((data) => data.json())
            .then((res) => {
                getCategoriesData(dispatch);
                setLoadingDelete(false);
            });
    };

    useEffect(() => {
        getCategoriesData(dispatch);
    }, []);
    return (
        <>
            <Box width={"80%"} marginX={"auto"}>
                <Box
                    display={"grid"}
                    padding={"10px"}
                    gridTemplateColumns={
                        "repeat(auto-fill, minmax(140px, 1fr))"
                    }
                    gap={"15px"}
                >
                    {categories.data?.map((element) => (
                        <Box
                            key={element.id}
                            display={"inline-flex"}
                            flexDirection={"column"}
                            justifyContent={"space-between"}
                            borderLeft={'5px solid dodgerblue'}
                            padding={"10px 15px"}
                            background={'#ffffff'}
                            gap={"15px"}
                            borderRadius={"5px"}
                            boxShadow={'3px 3px 9px #e3e2e2'}
                        >
                            <Spin className=" flex justify-between " spinning={idEl===element.id ? loadingDelete : ""} delay={500}>
                                <Text textColor={"dodgerblue"}>{element.name}</Text>
                                <Box
                                    marginTop={'20px'}
                                    width={"100%"}
                                    display={"flex"}
                                    gap={"30px"}
                                    justifyContent={"space-between"}
                                >
                                    <IconButton
                                        size={"sm"}
                                        fontSize={"16px"}
                                        textColor={"green"}
                                        icon={<RxUpdate />}
                                    />
                                    <IconButton
                                        size={"sm"}
                                        fontSize={"16px"}
                                        textColor={"crimson"}
                                        icon={<BsTrashFill />}
                                        onClick={() => {
                                            deleteCategories(element.id);
                                            setLoadingDelete(true);
                                        }}
                                    />
                                </Box>
                            </Spin>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
};

export default Categories;
