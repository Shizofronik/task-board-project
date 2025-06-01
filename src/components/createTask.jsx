import React, { useState } from "react";
import InizializateTasks from "../scripts/taskManager";

let maxId

InizializateTasks().then((data) => maxId = parseInt(data[data.length - 1].id) + 1)


function CreateTask({ TakeProperties }) {
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [id, setId] = useState(maxId)
    const [isCompleted] = useState("false")

    const getProperties = (event) => {
        event.preventDefault() 
        TakeProperties(id, titleValue, descriptionValue, isCompleted)
        setId(id + 1)
    }

    return (
        <form 
            style={{height: '200px', background: 'var(--bgColor-light)', border: 'none'}}
            onSubmit={event => getProperties(event)}>
            <input 
                data-input="title" 
                type="text" 
                placeholder="Title"
                onBlur={event => setTitleValue(event.target.value)}>
            </input>
            <input 
                data-input="description" 
                type="text" 
                placeholder="Description"
                onBlur={event => setDescriptionValue(event.target.value)}>
            </input>
            <button data-button="create-task">Создать задачу</button>
        </form>
    )
}

export default CreateTask;