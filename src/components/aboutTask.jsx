import React, {useState, useEffect} from 'react';
import { ChangeTask } from '../scripts/taskManager'

function AboutTask(props) {
    const {title, description, id} = props.aboutTaskInfo
    const [aboutTaskTitle, setAboutTaskTitle] = useState(title)
    const [aboutTaskDescription, setAboutTaskDescription] = useState(description)
    useEffect(() => {setAboutTaskTitle(title); setAboutTaskDescription(description)}, [title, description])
    //eslint-disable-next-line
    useEffect(() => props.update(), [aboutTaskTitle])

    const onChangeTitle = (event) => {
        setAboutTaskTitle(event.target.value); 
        ChangeTask(event.target.value, aboutTaskDescription, id) 
    }

    const onChangeDescription = (event) => {
        setAboutTaskDescription(event.target.value); 
        ChangeTask(aboutTaskTitle, event.target.value, id) 
    }
    
    return(
        <div className="about-task" style={{visibility: id != null ? 'visible' : 'hidden'}}>
            <textarea  className='about-task-title' value={aboutTaskTitle} 
                        onChange={event => {onChangeTitle(event)}}></textarea >
            <textarea  className='about-task-description' value={aboutTaskDescription}
                        placeholder='Добавьте описание...'
                        onChange={event => {onChangeDescription(event)}}></textarea >
            <input type='time' id='about-task-input-time' className='input-time'></input>
        </div>
    )
}

export default AboutTask