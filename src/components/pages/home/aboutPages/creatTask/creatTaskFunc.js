import { getTask } from "../../../../../store/taskSlice";
import headers from "../../../../config/authHeaderBearer";
import getCategoriesData from "../creatCategories/creatCatFunc";

const getData = (dispatch) => {
    fetch("http://todo.de-code.uz/api/tasks", {
        method: "GET",
        headers: headers(),
    })
        .then((res) => res.json())
        .then((data) => {
            getCategoriesData(dispatch);
            dispatch(getTask(data.payload));
            console.log(data);
        });
};

export default getData;
