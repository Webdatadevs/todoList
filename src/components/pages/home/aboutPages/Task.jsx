import { BsTrashFill } from "react-icons/bs";
import { Box, IconButton, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import headers from "../../../config/authHeaderBearer";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../../../../store/taskSlice";
import getCategoriesData from "./creatCategories/creatCatFunc";
import getData from "./creatTask/creatTaskFunc";

const Task = () => {
    const { task } = useSelector((state) => state.task);
    const dispatch = useDispatch();
    // const getData = () => {
    //     fetch("http://todo.de-code.uz/api/tasks", {
    //         method: "GET",
    //         headers: headers(),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             dispatch(getTask(data.payload));
    //             console.log(data);
    //             console.log(task);
    //         });
    // };

    const deleteTask = (id) => {
        fetch(`http://todo.de-code.uz/api/tasks/${id}`, {
            method: 'DELETE',
            headers: headers(),
        })
        .then((res) => res.json())
        .then((data) => {
            getData(dispatch)
            getCategoriesData(dispatch)
        })

    }

    useEffect(() => {
        getData(dispatch);
    }, []);
    return (
        <>
            <Box
                width={"80%"}
                marginX={"auto"}
                display={"grid"}
                padding={"10px"}
                gridTemplateColumns={"repeat(auto-fill, minmax(140px, 1fr))"}
                gap={"15px"}
            >
                {task.map((element) => (
                    <Box
                        key={element.id}
                        display={"inline-flex"}
                        borderTop={"5px solid dodgerblue"}
                        flexDirection={"column"}
                        justifyContent={"space-between"}
                        boxShadow={"3px 3px 9px #e3e2e2"}
                        padding={"10px 15px"}
                        position={"relative"}
                    >
                        <Text
                            position={"absolute"}
                            top={"5px"}
                            left={"5px"}
                            fontSize={"14px"}
                            textColor={"#575656"}
                        >
                            {element.task}
                        </Text>
                        <IconButton
                        onClick={() => deleteTask(element.id)}
                            icon={<BsTrashFill />}
                            textColor={"crimson"}
                            position={"absolute"}
                            top={"5px"}
                            right={"5px"}
                            size={"sm"}
                        />
                        <Text marginTop={"25px"}>{element.description}</Text>
                    </Box>
                ))}
            </Box>
        </>
    );
};

export default Task;
