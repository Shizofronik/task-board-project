import React, { useState } from "react";
import { ChangeStateTask } from "../scripts/taskManager";

function Task(props) {
    const [taskClass, setTaskClass] = useState(props.task.completed === "false" ? "task-card" : "task-card completed")
    const [isComlpeted, setIsCompleted] = useState(Boolean(props.task.completed === "true"))

    const addCompleted = () => {
        setTaskClass(ChangeStateTask(isComlpeted, props.task.id))
        setIsCompleted(!isComlpeted)

        if (document.getElementById(`${props.task.id}`).parentElement.id === 'inbox-tasks') {
            document.getElementById('completed-tasks').appendChild(document.getElementById(`${props.task.id}`))
        }
        else {
            document.getElementById('inbox-tasks').appendChild(document.getElementById(`${props.task.id}`))
        }

    }


    return (
        <div className={taskClass} id={props.task.id}>
            <input type="checkbox" onChange={addCompleted} checked={isComlpeted}></input>
            <h4>{props.task.title}</h4>
            <p>{props.task.description}</p>
        </div>
    )
}

export default Task;