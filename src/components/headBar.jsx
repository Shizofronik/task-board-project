import React, { useState } from 'react';

function HeadBar({ TakeUsername }) {
    const [userName] = useState(TakeUsername)

    const GetUserName = () => {
        return userName
    }

    return (
        <nav className="tabs">
            <button className="tab">{GetUserName()}</button> 
            <button data-page="about" className="tab">О проекте</button>
            <button data-page="list" className="tab active">Список задач</button>
            <button data-page="board" className="tab">Доска задач</button>
        </nav>
    )
}

export default HeadBar;