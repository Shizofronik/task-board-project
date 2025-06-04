import React, { useState } from "react";
import InizializateTasks from "../scripts/taskManager";

let maxId

InizializateTasks().then((data) => maxId = parseInt(data[data.length - 1].id) + 1)


function CreateTask({ TakeProperties }) {
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue] = useState('')
    const [id, setId] = useState(maxId)
    const [isCompleted] = useState("false")

    const getProperties = (event) => {
        event.preventDefault() 
        TakeProperties(id, titleValue, descriptionValue, isCompleted)
        setId(id + 1)
    }

    return (
        <form class="create-form"onSubmit={event => getProperties(event)}>
            <button style={{height: 30, borderRadius: '50%', marginRight: 10, marginTop: '5px'}}
                    type="submit">
                        +
            </button>
            <input style={{width: '85%', marginTop: '5px'}} 
                    placeholder="Создать задачу" 
                    id="create-task"
                    onChange={event => setTitleValue(event.target.value)}>
            </input>
        </form>

    )
}

export default CreateTask;