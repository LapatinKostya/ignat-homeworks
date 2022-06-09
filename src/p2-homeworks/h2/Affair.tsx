import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void// need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        {props.deleteAffairCallback(id)}
    }// need to fix

    return (
        <div>
            <div>
                <span className={classes.someClass}>{props.affair.name}</span>
                <span>{props.affair.priority}</span>
                <button onClick={()=>deleteCallback(props.affair._id)}>X</button>
            </div>


        </div>
    )
}

export default Affair
