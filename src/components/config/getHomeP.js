function getHomePage() {
    if (localStorage.getItem(`todo-token`)) {
        location.pathname = "/";
    }else{
        // location.pathname = "/login"; 
    }
}

export default getHomePage