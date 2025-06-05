import React from 'react';
import Task from './task'
import CreateTask from './createTask';

function SortedTask(taskInfo, updateList) {

    return(
        [...taskInfo].map(task => 
            <Task task={task} key={task.id} update={updateList}/>
        )
    )
}


function InboxList({taskInfo, updateList, taskCompletedInfo, TakeProperties, ...props}) {
    
    return (
        <div className="task-list" id='inbox-list'>
            <CreateTask TakeProperties={TakeProperties}/>
            <ul id="inbox-tasks" style={{padding: 0}}>
                {SortedTask(taskInfo, updateList)}
                <ComplitedList taskInfo={taskCompletedInfo} updateList={taskInfo}/>
            </ul>
        </div>
    )
}

function ComplitedList({taskInfo, updateList, ...props}) {

    return (
        <div className="task-list-completed" id='completed-list'>
            <h5 style={{float: 'left', marginLeft: 10}}>Выполнено</h5>
            <ul id="completed-tasks" style={{padding: 0}}>
                {SortedTask(taskInfo, updateList)}
            </ul>
        </div>
    )
}

export default InboxList;
export { ComplitedList}