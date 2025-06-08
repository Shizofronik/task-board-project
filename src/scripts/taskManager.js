//Инициализация тасков для рендера
const InizializateTasks = async () => {

    const response = await fetch('http://localhost:3001/tasks');
    const dataValues = await response.json();

    return dataValues
}

//Найти таск по id
const FindTask = async (id) => {
    const response = await fetch(`http://localhost:3001/tasks/${id}`);
    const dataValues = await response.json();

    return dataValues
}

const AddTask = (id, titleValue, descriptionValue, isCompleted) => {
    fetch(`http://localhost:3001/tasks`,
    { method: 'POST', body: JSON.stringify({id: String(id), 
                                            title: titleValue, 
                                            description: descriptionValue, 
                                            completed: isCompleted }) })
}

const ChangeTask = (title, description, id) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({title: title, description: description}),
    })

}

//Смена состояний таска(активен/выполнен)
const ChangeStateTask = (state, id) => {
    const completedClass = "task-card completed"
    const activeClass = "task-card"

    if(state === true) {
        fetch(`http://localhost:3001/tasks/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({completed: "false"}),
        })

        return activeClass
    }

    else {
        fetch(`http://localhost:3001/tasks/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({completed: "true"}),
        })

        return completedClass
    }

}

export default InizializateTasks
export {AddTask, ChangeStateTask, FindTask, ChangeTask}