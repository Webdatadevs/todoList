function headers() {
    return {
        Authorization: "Bearer " + localStorage.getItem("todo-token"),
    };
}

export default headers;
