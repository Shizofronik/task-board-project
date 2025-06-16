import React, {useState, useEffect} from 'react';
import { ChangeTask } from '../scripts/taskManager'

function AboutTask(props) {
    const {title, description, id, time} = props.aboutTaskInfo
    const [aboutTaskTitle, setAboutTaskTitle] = useState(title)
    const [aboutTaskDescription, setAboutTaskDescription] = useState(description)
    const [timeTask, setTimeTask] = useState(time)
    useEffect(() => {setAboutTaskTitle(title); setAboutTaskDescription(description); setTimeTask(time)}, [title, description, time])

    const onChangeTitle = (event) => {
        setAboutTaskTitle(event.target.value); 
        ChangeTask(event.target.value, aboutTaskDescription, id, timeTask) 
    }

    const onChangeDescription = (event) => {
        setAboutTaskDescription(event.target.value); 
        ChangeTask(aboutTaskTitle, event.target.value, id, timeTask) 
    }

    const onChangeTime = (event) => {
        setTimeTask(event.target.value); 
        console.log(event.target.value)
        ChangeTask(aboutTaskTitle, aboutTaskDescription, id, event.target.value) 
    }
    
    return(
        <div className="about-task" style={{visibility: id != null ? 'visible' : 'hidden'}}>
            <textarea  className='about-task-title' value={aboutTaskTitle} 
                        onChange={event => {onChangeTitle(event)}}></textarea >
            <textarea  className='about-task-description' value={aboutTaskDescription}
                        placeholder='Добавьте описание...'
                        onChange={event => {onChangeDescription(event)}}></textarea >
            <input type='time' id='about-task-input-time' className='input-time' 
                        value={timeTask} onChange={event => onChangeTime(event)}></input>
            <select className='color-menu'>
                <option value="iphone 6s">red</option>
                <option value="lumia 950">blue</option>
                <option value="nexus 5x">yellow</option>
                <option value="galaxy s7">green</option>
            </select>
        </div>
    )
}

export default AboutTask