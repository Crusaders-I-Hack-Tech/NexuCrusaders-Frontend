import { Link } from "react-router-dom";

import "../styles/dia.css";

interface day{
    dia: number,
    video: string
}

const Dia = (props:day) => {
    return(
        <div className="diaContainer">
            <div className="header">
                {props.dia}
            </div>
            <div className="videoLink">
                {props.video}
            </div>
        </div>
    );
};

export default Dia;