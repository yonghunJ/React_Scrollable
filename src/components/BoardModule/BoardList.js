import React from 'react';
import Board from './Board';
import '../../styles/Main.css';

function BoardList({ boards }) {

    return (
        <main className="flexbox">
            <Board key={"board-1"} {...boards[0]}/>
        </main>
    );
}

export default BoardList;