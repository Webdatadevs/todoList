import { Box, Heading, IconButton } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLogin } from "react-icons/ai";

const HomePageHeader = () => {
    const logOutFunction = () => {
        location.pathname = "/login";
        localStorage.clear()
    }

    return (
        <>
            <Box width={"100%"} background={"dodgerblue"}>
                <Box
                    width={"80%"}
                    marginX={"auto"}
                    padding={"10px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                >
                    <Heading textColor={"#fff"} fontSize={"24px"}>
                        To Do List
                    </Heading>
                    <IconButton 
                    onClick={() => logOutFunction()}
                    textColor={"red"} icon={<AiOutlineLogin />} />
                </Box>
            </Box>
        </>
    );
};

export default HomePageHeader;
