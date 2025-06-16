import React, { useState} from "react";
import InizializateTasks from "../scripts/taskManager";

let maxId

InizializateTasks().then((data) => maxId = parseInt(data[data.length - 1].id) + 1)


function CreateTask({ TakeProperties }) {
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [id, setId] = useState(maxId)
    const [time] = useState('00:00')
    const [visibleDescription, setVisibleDescription] = useState(false)
    const [isCompleted] = useState("false")

    const getProperties = (event) => {
        event.preventDefault() 
        if(titleValue !== '') {
            console.log(titleValue)
            TakeProperties(id, titleValue, descriptionValue, time, isCompleted)
            setId(id + 1)
        }

    }

    const OnSubmit = (event) => {
        getProperties(event); 
        setVisibleDescription(false);
        document.getElementById('create-task-title').value = ''
        setDescriptionValue('')
    }

    return (
        <form className="create-form" style={{padding: 0, margin: '2%'}} 
                                    onSubmit={event => OnSubmit(event)}
                                    onFocus={() => setVisibleDescription(true)}>
            <button style={{display: 'none'}} type="submit"></button>
            <input style={{width: '100%'}} 
                    placeholder="Создать задачу" 
                    id="create-task-title"
                    onChange={event => setTitleValue(event.target.value)}>
            </input>
            {visibleDescription === true 
                ? <input style={{width: '100%'}} 
                    placeholder="Добавить описание" 
                    id="create-task-description"
                    onChange={event => {setDescriptionValue(event.target.value)}}>
                  </input>
                : null
            }

        </form>

    )
}

export default CreateTask;