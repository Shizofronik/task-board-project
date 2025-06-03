import React, { useState } from 'react';
import HeadBar from './headBar'
import InboxList from './taskLists';
import CreateTask from './createTask';
import InizializateTasks, {AddTask} from '../scripts/taskManager';
import SideBar from './sideBar';

let taskList 
InizializateTasks().then((data) => taskList = data)

function Main({ TakeUsername }) {
    const [userName] = useState(TakeUsername)
    const [taskInboxInfo, setTaskInboxInfo] = useState([...taskList.filter(task => task.completed === "false")])
    const [taskCompletedInfo, setTaskCompletedInfo] = useState([...taskList.filter(task => task.completed === "true")])

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
        }
    )      
    }

    return (
        <div className='main-container'>
            <HeadBar TakeUsername={userName} />
            <div className="task-main">
                <SideBar/>
                <InboxList taskInfo={taskInboxInfo} 
                    taskCompletedInfo={taskCompletedInfo} 
                    updateList={updateLists}/>
                <CreateTask TakeProperties={addTask} />
            </div>
        </div>
    )
}

export default Main;