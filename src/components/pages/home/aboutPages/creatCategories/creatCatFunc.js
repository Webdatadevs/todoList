import { getCategories } from "../../../../../store/todoSlice";
import headers from "../../../../config/authHeaderBearer";

const getCategoriesData = (dispatch) => {
    fetch("http://todo.de-code.uz/api/categories", {
        method: "GET",
        headers: headers(),
    })
        .then((res) => res.json())
        .then((data) => {
            dispatch(getCategories(data));
            console.log(data)
        });
};

export default getCategoriesData