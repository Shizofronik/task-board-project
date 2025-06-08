import React, { useEffect, useState } from 'react';
import HeadBar from './headBar'
import InboxList from './taskLists';
import InizializateTasks, {AddTask, FindTask} from '../scripts/taskManager';
import SideBar from './sideBar';
import AboutTask from './aboutTask';

let taskList 
InizializateTasks().then((data) => taskList = data)

function Main({ TakeUsername }) {
    const [userName] = useState(TakeUsername)
    const [taskInboxInfo, setTaskInboxInfo] = useState([...taskList.filter(task => task.completed === "false")])
    const [taskCompletedInfo, setTaskCompletedInfo] = useState([...taskList.filter(task => task.completed === "true")])
    const [aboutTaskInfo, setAboutTaskInfo] = useState({id: null, title: '', description: ''})
    useEffect(() => updateLists(), [taskInboxInfo])
    

    const addTask = (id, titleValue, descriptionValue, isCompleted) => {
        setTaskInboxInfo([...taskInboxInfo, { id: id, 
                                    title: titleValue, 
                                    description: descriptionValue, 
                                    completed: isCompleted }])
        AddTask(id, titleValue, descriptionValue, isCompleted)

    }

    const updateLists = () => {
        InizializateTasks().then((data) =>  {
            setTaskInboxInfo([...data].filter(task => task.completed === "false"))
            setTaskCompletedInfo([...data].filter(task => task.completed === "true"))
        })      
    }

    const targetTask = (event) => {
        if(event.target.classList.contains('task-card')) {
            FindTask(event.target.id).then((data) => setAboutTaskInfo(data))
        }
    }

    return (
        <div className='main-container'>
            <HeadBar TakeUsername={userName} />
            <div className="task-main" onClick={event => targetTask(event)}>
                <SideBar/>
                <InboxList taskInfo={taskInboxInfo} 
                    taskCompletedInfo={taskCompletedInfo} 
                    updateList={updateLists}
                    TakeProperties={addTask}/>
                <AboutTask aboutTaskInfo={aboutTaskInfo} update={updateLists}/>
            </div>
        </div>
    )
}

export default Main;