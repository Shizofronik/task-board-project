import React from 'react';
import Task from './task'

function SortedTask(taskInfo, updateList) {

    return(
        [...taskInfo].map(task => 
            <Task task={task} key={task.id} update={updateList}/>
        )
    )
}


function InboxList({taskInfo, updateList, ...props}) {
    
    return (
        <div className="task-list" id='inbox-list'>
            <h3>Входящие</h3>
            <ul id="inbox-tasks" style={{padding: 0}}>
                {SortedTask(taskInfo, updateList)}
            </ul>
        </div>
    )
}

function ComplitedList({taskInfo, updateList, ...props}) {

    return (
        <div className="task-list" id='completed-list'>
            <h3>Завершенные</h3>
            <ul id="completed-tasks" style={{padding: 0}}>
                {SortedTask(taskInfo, updateList)}
            </ul>
        </div>
    )
}

export default InboxList;
export { ComplitedList}