import React, {useState, useCallback} from 'react';
import HeadBar from './headBar'
import InboxList from './taskLists';
import InizializateTasks, {AddTask, FindTask} from '../scripts/taskManager';
import SideBar from './sideBar';
import AboutTask from './aboutTask';

let taskList 
await InizializateTasks().then((data) => {taskList = data})

function Main({ TakeUsername }) {
    const [userName] = useState(TakeUsername)
    const [taskInboxInfo, setTaskInboxInfo] = useState([...taskList.filter(task => task.completed === "false")])
    const [taskCompletedInfo, setTaskCompletedInfo] = useState([...taskList.filter(task => task.completed === "true")])
    const [aboutTaskInfo, setAboutTaskInfo] = useState({id: null})
    

    //Обновление taskInboxInfo и запись в db
    const addTask = (id, titleValue, descriptionValue, time, isCompleted) => {
        setTaskInboxInfo([...taskInboxInfo, { id: id, 
                                    title: titleValue, 
                                    description: descriptionValue,
                                    time: time, 
                                    completed: isCompleted }])
        AddTask(id, titleValue, descriptionValue, time, isCompleted)

    }

    //Для синхронного обновления заголовков aboutBlock и task
    const updateLists = useCallback(() => {
        InizializateTasks().then((data) =>  {
            setTaskInboxInfo([...data].filter(task => task.completed === "false"))
            setTaskCompletedInfo([...data].filter(task => task.completed === "true"))
        })      
    }, [])

    //Передаем данные о задаче в фокусе
    const targetTask = useCallback((event) => {
        if(event.target.classList.contains('task-card')) {
            FindTask((event.target.id).split('-')[1]).then((data) => setAboutTaskInfo(data))
        }
    }, [])

    return (
        <div className='main-container'>
            <HeadBar TakeUsername={userName} />
            <div className="task-main" onClick={event => targetTask(event)}>
                <SideBar/>
                <InboxList taskInfo={taskInboxInfo} 
                    taskCompletedInfo={taskCompletedInfo} 
                    TakeProperties={addTask}/>
                <AboutTask aboutTaskInfo={aboutTaskInfo} update={updateLists}/>
            </div>
        </div>
    )
}

export default Main;