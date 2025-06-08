import React, { useState } from "react";
import InizializateTasks from "../scripts/taskManager";

let maxId

InizializateTasks().then((data) => maxId = parseInt(data[data.length - 1].id) + 1)


function CreateTask({ TakeProperties }) {
    const [titleValue, setTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [id, setId] = useState(maxId)
    const [isCompleted] = useState("false")
    const [visibleDescription, setVisibleDescription] = useState(false)

    const getProperties = (event) => {
        event.preventDefault() 
        if(titleValue !== '') {
            console.log(titleValue)
            TakeProperties(id, titleValue, descriptionValue, isCompleted)
            setId(id + 1)
        }

    }

    return (
        <form className="create-form" onSubmit={event => {getProperties(event); 
                                                      setVisibleDescription(false);
                                                      document.getElementById('create-task-title').value = ''
                                                      document.getElementById('create-task-description').value = ''
                                                    }}
                                  onFocus={() => setVisibleDescription(true)}>
            <button style={{height: 30, borderRadius: '50%', marginRight: 10, marginTop: '5px'}}
                    type="submit">
                        +
            </button>
            <input style={{width: '85%', marginTop: '5px'}} 
                    placeholder="Создать задачу" 
                    id="create-task-title"
                    onChange={event => setTitleValue(event.target.value)}>
            </input>
            {visibleDescription === true 
                ? <input style={{width: '85%', marginLeft: '40px'}} 
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