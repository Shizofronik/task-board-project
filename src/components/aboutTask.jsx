import React from 'react';

function AboutTask(props) {

    return(
        <div className="about-task" style={{visibility: props.aboutTaskInfo.id != null ? 'visible' : 'hidden'}}>
            <h3 style={{margin: 10}}>{props.aboutTaskInfo.title}</h3>
            <div className='about-task-description' style={{margin: 10}}>
                <h5>{props.aboutTaskInfo.description}</h5>
            </div>
        </div>
    )
}

export default AboutTask