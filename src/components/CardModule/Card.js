import React, { useContext, useState } from 'react';
// import CardInfo from './CardPopup/CardInfo';
import '../../styles/Main.css';
import { Context } from '../../context';
function Card(props) {

    const [ titleInfo, setTitleInfo] = useState(props.title);
    const [ askingForm, setAskingForm] = useState(props.answer_type);
    
    const { dispatch } = useContext(Context);

    const titleOnChange = (e)=>{  
        setTitleInfo(e.target.value);
        dispatch({
            type: 'UPDATE_TITLE_CARDS',
            payload: {
                board_old_id: 'board-1',
                card_id: props.id,
                card_type: props.type,
                board_new_id: props.id, 
                title: e.target.value,
                answer_type:e.target.value, 
                card: {
                    id: props.id,
                    className: "card",
                    draggable: "true",
                    type: props.type,
                    title: props.title
                } 
            }
        });

    };
    const onAnswerTypeChange = (e) =>{
        setAskingForm(parseInt(e.target.value));
        dispatch({
            type: 'UPDATE_TYPE_CARDS',
            payload: {
                board_old_id: 'board-1',
                card_id: props.id,
                card_type: props.type,
                board_new_id: props.id, 
                title: e.target.value,
                answer_type:e.target.value, 
                card: {
                    id: props.id,
                    className: "card",
                    draggable: "true",
                    type: props.type,
                    title: props.title
                }
            }
        });

    };
    const dragStart = (e) => {
        const target = e.target;

        e.dataTransfer.setData('cardId', `{"target": "${target.id}", "id": "${props.id}", "type": "${props.type}", "title": "${props.title}", "board_id": "${props.boardId}" , "answer_type": "${askingForm}" }`);

    };
    const removeClick = (e) => {
        dispatch({
            type: 'REMOVE_CARDS',
            payload: {
                board_old_id: 'board-1',
                card_id: props.id,
                card_type: props.type,
                board_new_id: props.id, 
                title: e.target.value,
                answer_type:e.target.value, 
                card: {
                    id: props.id,
                    className: "card",
                    draggable: "true",
                    type: props.type,
                    title: props.title
                }
            }
        });

    };
    const duplicateClick = (e) => {
        dispatch({
            type: 'DUPLICATE_CARDS',
            payload: {
                board_old_id: 'board-1',
                card_id: props.id,
                card_type: props.type,
                board_new_id: props.id, 
                title: e.target.value,
                answer_type:e.target.value, 
                card: {
                    id: props.id,
                    className: "card",
                    draggable: "true",
                    type: props.type,
                    title: props.title
                }
            }
        });

    };
    

    const dragOver = (e) => {

        e.stopPropagation();

    };
    return (
        <div>
            <div
                id={props.id}
                className={props.className}
                draggable={props.draggable}
                onDragStart={dragStart}
                onDragOver={dragOver}
            >
                <label>
                    <input type="text"  onChange={titleOnChange} value ={titleInfo} />
                </label>
                {askingForm == 0 &&
                <ul style={{ "listStyleType":'none' }}>
                    <li><input type="radio" value="1" name="set"/> Setting1</li>
                    <li><input type="radio" value="2" name="set"/> Setting2</li>
                    <li><input type="radio" value="3" name="set"/> Setting3</li>
                </ul>
                }
                {askingForm == 1 &&
                <ul style={{ "listStyleType":'none' }}>
                    <li><input type="checkbox" value="1" name="set2"/> Setting1</li>
                    <li><input type="checkbox" value="2" name="set2"/> Setting2</li>
                    <li><input type="checkbox" value="3" name="set2"/> Setting3</li>
                </ul>
                }
                {askingForm == 2 && <input type="text"  name="set" placeholder="Short Answer"/> }
                <select name="buttons" value ={askingForm.toString()} id="buttons" onChange={onAnswerTypeChange}>
                    <option value="0">Radio</option>
                    <option value="1">Checkbox</option>
                    <option value="2">Short Answer</option>
                </select>
                <button onClick={duplicateClick}>Duplicate</button>
                <button onClick={removeClick}>remove</button>
            </div>
            
        </div>
    );
}

export default Card;
