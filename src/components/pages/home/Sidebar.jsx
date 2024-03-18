import { Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import data from "../../config/const";

const Sidebar = () => {
    return (
        <>
            <Box width={"80%"} overflowX={'auto'} display={'flex'} alignItems={'center'} gap={'10px'} marginX={"auto"} padding={"20px 10px"}>

                {data.map((element, index) => (
                    <NavLink key={element.id} to={element.path}>
                        <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={"10px"}
                            background={"dodgerblue"}
                            padding={"10px"}
                            textColor={"white"}
                        >
                            <Icon as={element.icon}/>
                            <Text >{element.title}</Text>
                        </Box>
                    </NavLink>
                ))}

            </Box>
        </>
    );
};

export default Sidebar;
