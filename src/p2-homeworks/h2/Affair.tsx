import React from 'react'
import {AffairType} from "./HW2";
import classes from "./Affairs.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
                <SuperButton onClick={()=>deleteCallback(props.affair._id)}>X</SuperButton>
                <span className={classes.someClass}>{props.affair.name}</span>
                <span>{props.affair.priority}</span>
            </div>


        </div>
    )
}

export default Affair
