import React, { useState } from "react";
import { ChangeStateTask } from "../scripts/taskManager";

function Task(props) {
    const [taskClass, setTaskClass] = useState(props.task.completed === "false" ? "task-card" : "task-card completed")
    const [isComlpeted, setIsCompleted] = useState(Boolean(props.task.completed === "true"))

    const addCompleted = () => {
        const thisTaskId = props.task.id
        setTaskClass(ChangeStateTask(isComlpeted, thisTaskId))
        setIsCompleted(!isComlpeted)

        if (document.getElementById(`${thisTaskId}`).parentElement.id === 'inbox-tasks') {
            document.getElementById('completed-tasks').appendChild(document.getElementById(`${thisTaskId}`))
        }
        else {
            document.getElementById('inbox-tasks').appendChild(document.getElementById(`${thisTaskId}`))
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