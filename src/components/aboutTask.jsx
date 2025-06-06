import React from 'react';

function AboutTask(props) {
    //const [aboutTaskTitle, setAboutTaskTitle] = useState()


    return(
        <div className="about-task" style={{visibility: props.aboutTaskInfo.id != null ? 'visible' : 'hidden'}}>
            <textarea  className='about-task-title' value={props.aboutTaskInfo.title}></textarea >
            <div className='about-task-description'>
                <textarea  className='about-task-title' value={props.aboutTaskInfo.description}></textarea >
            </div>
        </div>
    )
}

export default AboutTask