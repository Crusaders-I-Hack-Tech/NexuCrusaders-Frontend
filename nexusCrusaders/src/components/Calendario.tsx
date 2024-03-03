import { Link } from "react-router-dom";
import NavBar from "./NavBar";

import "../styles/calendario.css";

const Calendario = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();
    const firstMonthDay = new Date(year, month, 1);
    const nextMonth = new Date(year, month + 1, 1);
    const monthDays = nextMonth - firstMonthDay;
    console.log(monthDays / 86400000);
    for (let i = 0; i < monthDays; i++){
        if(i + 1 < day){
            let color = "gris/empty"
        }
        else{
            let content = "apiContent"
        }
    }
    return(
        <div></div>
    );
};


export default Calendario;
