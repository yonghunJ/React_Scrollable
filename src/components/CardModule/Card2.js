import React, { useState } from 'react';
// import CardInfo from './CardPopup/CardInfo';
import '../../styles/Main.css';

function Card2(props) {

    const [ isShowInfo, setIsShowInfo] = useState(null);
    const [ answerType, setAnswerType] = useState(props.answer_type);


    const showCardInfoHandler = () => {

        setIsShowInfo(true);

    };

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('cardId', `{"target": "${target.id}", "id": "${props.id}", "type": "${props.type}", "title": "${props.title}", "board_id": "${props.boardId}", "answer_type": "${answerType}" }`);

    };

    const dragOver = e => {

        e.stopPropagation();

    };

    return (
        <div>
            <div
                onClick={ showCardInfoHandler }
                id={props.id}
                className={props.className}
                draggable={props.draggable}
                onDragStart={dragStart}
                onDragOver={dragOver}
            >
                <b><p>{props.title}</p> </b>
                <p>{props.description}</p> 
                
                {answerType == 0 &&
                    <ul style={{ "listStyleType":'none' }}>
                        <li><input type="radio" value="1" name="set"/> Setting1</li>
                        <li><input type="radio" value="2" name="set"/> Setting2</li>
                        <li><input type="radio" value="3" name="set"/> Setting3</li>
                    </ul>
                }
                {answerType == 1 &&
                <ul style={{ "listStyleType":'none' }}>
                    <li><input type="checkbox" value="1" name="set2"/> Setting1</li>
                    <li><input type="checkbox" value="2" name="set2"/> Setting2</li>
                    <li><input type="checkbox" value="3" name="set2"/> Setting3</li>
                </ul>
                }
                {answerType == 2 && <input type="text"  name="set" placeholder="Short Answer"/> }

        
            </div>
            {/* {isShowInfo && <CardInfo closeCardInfoHandler={ closeCardInfoHandler } card_id ={props.id} card_title={props.title} board_name={props.board_name}/>}        */}
        </div>
    );
}

export default Card2;
