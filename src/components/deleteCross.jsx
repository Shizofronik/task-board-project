import React from 'react';
import { DeleteTask } from '../scripts/taskManager';

function DeleteCross({parentElement, update}) {

    const Delete = () => {
        DeleteTask(parentElement.id)
        update()
    }

    return(
        <div className="delete" onClick={Delete}> 
            <div className='delete-cross'></div>
        </div>
    )

}

export default DeleteCross