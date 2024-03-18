import { BiDuplicate } from "react-icons/bi";
import { BiCategory } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";

const data = [
    {
        id: 1,
        path: "/",
        icon: BsListTask,
        title: "All tasks",
        
    },
    {
        id: 2,
        path: "/categories",
        icon: BiCategory,
        title: "Categories",

    },
    {
        id: 3,
        path: "/creat-task",
        icon: FaTasks,
        title: "Creat task",

    },
    {
        id: 4,
        path: "/creat-categories",
        icon: BiDuplicate,
        title: "Creat Category",

    },
];

export default data;
