import React, { useState } from "react";
import { ChangeStateTask } from "../scripts/taskManager";
import DeleteCross from "./deleteCross";

function Task(props) {
    const [taskClass, setTaskClass] = useState(props.task.completed === "false" ? "task-card" : "task-card completed")
    const [isComlpeted, setIsCompleted] = useState(Boolean(props.task.completed === "true"))

    const addCompleted = () => {
        setTaskClass(ChangeStateTask(isComlpeted, props.task.id))
        setIsCompleted(!isComlpeted)
    }

    return (
        <div className={taskClass} id={props.task.id}>
            <input type="checkbox" onChange={addCompleted} checked={isComlpeted} style={{borderRadius: '10% !important'}}></input>
            <h4>{props.task.title}</h4>
            <DeleteCross parentElement={props.task}/>
        </div>
    )
}

export default Task;