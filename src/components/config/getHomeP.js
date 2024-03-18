function getHomePage() {
    if (localStorage.getItem(`todo-token`)) {
        location.pathname = "/";
    }
}

export default getHomePage