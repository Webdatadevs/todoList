import { CgMail } from "react-icons/cg";
import { BiShow } from "react-icons/bi";
import { GrFormViewHide } from "react-icons/gr";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
    InputRightElement,
    Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import setLocalStorage from "../config/setLocalStorage";
import { Spin } from "antd";
import getHomePage from "../config/getHomeP";
import { NavLink } from "react-router-dom";

const Login = () => {
    const [show, setShow] = useState(false);
    const handlerClick = () => setShow(!show);
    const [emailButton, setEmailButton] = useState(false);
    const clickEmailButton = () => setEmailButton(!emailButton);

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");
    const [password, setPassword] = useState("");

    async function loginFunction(e) {
        e.preventDefault();
        let data = {
            phone: num,
            password: password,
        };
        await axios
            .post("https://todo.de-code.uz/api/login", data)
            .then((res) => {
                setLocalStorage(`todo-token`, res.data.payload.token);
                setLoading(false);
                getHomePage();
            })
            .catch((err) => {
                setLoading(false);
            });
    }
    getHomePage();

    return (
        <>
            <Box
                width={"100%"}
                minHeight={"100vh"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    position={"relative"}
                    boxShadow={"1px 1px 10px silver, -1px -1px 10px silver"}
                    _before={{
                        background: "dodgerblue",
                        content: '""',
                        display: "block",
                        width: "100%",
                        height: "5px",
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                    }}
                    paddingX={"15px"}
                    paddingY={"15px"}
                    borderRadius={"5px"}
                >
                    <Heading textAlign={"center"} fontSize={"24px"}>
                        To Do
                    </Heading>
                    <form
                        className="flex flex-col justify-center items-center "
                        onSubmit={(e) => loginFunction(e)}
                    >
                        <FormControl width={"100%"} marginTop={"30px"}>
                            <FormLabel fontWeight={"bold"}>
                                {emailButton
                                    ? "Электронная почта"
                                    : "Телефон номер"}
                            </FormLabel>
                            <Stack>
                                {emailButton ? (
                                    <InputGroup width={"284px"}>
                                        <InputLeftElement
                                            borderTopLeftRadius={"5px"}
                                            borderBottomLeftRadius={"5px"}
                                            background={"dodgerblue"}
                                            textColor={"white"}
                                            pointerEvents="none"
                                        >
                                            <CgMail />
                                        </InputLeftElement>
                                        <Input
                                            paddingLeft={"50px"}
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            required
                                            type="email"
                                            placeholder="alexander@mail.ru"
                                            focusBorderColor="dodgerblue"
                                        />
                                    </InputGroup>
                                ) : (
                                    <InputGroup>
                                        <InputLeftAddon
                                            background={"dodgerblue"}
                                            textColor={"white"}
                                        >
                                            +998
                                        </InputLeftAddon>
                                        <Input
                                            value={num}
                                            onChange={(e) =>
                                                setNum(e.target.value)
                                            }
                                            required
                                            type="text"
                                            marginLeft={"1px"}
                                            placeholder="телефон номер"
                                            focusBorderColor="dodgerblue"
                                            maxLength={"16"}
                                        />
                                    </InputGroup>
                                )}
                            </Stack>
                        </FormControl>

                        <FormControl width={"100%"} marginTop={"30px"}>
                            <FormLabel fontWeight={"bold"}>Пароль</FormLabel>
                            <InputGroup>
                                <Input
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                    type={show ? "text" : "password"}
                                    focusBorderColor="dodgerblue"
                                    placeholder="пароль"
                                />
                                <InputRightElement>
                                    <Button
                                        _active={{
                                            opacity: "0.5",
                                            background: "dodgerblue",
                                        }}
                                        borderTopLeftRadius={"0px"}
                                        borderBottomLeftRadius={"0px"}
                                        _hover={{
                                            background: "dodgerblue",
                                        }}
                                        background={"dodgerblue"}
                                        textColor={"white"}
                                        fontSize={"24px"}
                                        onClick={handlerClick}
                                    >
                                        {show ? <GrFormViewHide /> : <BiShow />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>

                        <FormControl width={"100%"} marginTop={"30px"}>
                            <Spin spinning={loading} delay={500}>
                                <Button
                                    type="submit"
                                    width={"100%"}
                                    _active={{
                                        opacity: "0.5",
                                        background: "dodgerblue",
                                    }}
                                    _hover={{ background: "dodgerblue" }}
                                    background={"dodgerblue"}
                                    textColor={"white"}
                                    fontSize={"16px"}
                                    onClick={() => {
                                        setLoading(
                                            num && password ? true : false
                                        );
                                    }}
                                >
                                    ВОЙТИ
                                </Button>
                            </Spin>
                        </FormControl>
                        {/* <FormControl width={"100%"} marginTop={"30px"}>
                            <Button
                                width={"100%"}
                                _active={{ opacity: "0.5", background: "#fff" }}
                                _hover={{ background: "dodgerblue" }}
                                background={"dodgerblue"}
                                textColor={"white"}
                                fontSize={"14px"}
                                onClick={clickEmailButton}
                            >
                                {emailButton
                                    ? "ВОЙТИ ЧЕРЕЗ ТЕЛЕФОН НОМЕРУ"
                                    : "ВОЙТИ ЧЕРЕЗ ЭЛУТРОННУЮ ПОЧТУ"}
                            </Button>
                        </FormControl> */}
                        <NavLink
                            to={"/register"}
                            className={"w-full mt-[30px] "}
                        >
                            <Button
                                type="submit"
                                width={"100%"}
                                _active={{
                                    opacity: "0.5",
                                    background: "dodgerblue",
                                }}
                                _hover={{ background: "dodgerblue" }}
                                background={"dodgerblue"}
                                textColor={"white"}
                                fontSize={"16px"}
                                onClick={() => {
                                    setLoading(num && password ? true : false);
                                }}
                            >
                                авторизоваться
                            </Button>
                        </NavLink>
                    </form>
                </Box>
            </Box>
        </>
    );
};

export default Login;
