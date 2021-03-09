
import React, { useState, useContext }  from 'react';
import { Context } from '../../../context';
import * as uuid from "uuid";
import '../../../styles/Popup.css';
import '../../../styles/Main.css';
// This function is to create new Card 
function CardCreate( props ) {

    const { dispatch } = useContext(Context);

    const [cardTitle, setCardTitle] = useState('');
    const [cardDescription, setCardDescription] = useState('');

    const createCard = e => {
        
        if (e) {
            e.preventDefault();
        }

        if (cardTitle.length) {
            dispatch({
                type: 'ADD_CARD',
                payload: { 
                    board_id: props.boardId,
                    card: {
                        title: cardTitle,
                        description: cardDescription,
                        id: uuid.v4(),
                        type: props.type,
                        draggable:"true",
                        className:"card",
                        answer_type:0
                    }
                }
            });
        
            setCardTitle('');
            setCardDescription('');
        }
    };
    // When Enter is clicked, card is created
    const createCardByEnter = e => {

        if (e.key === 'Enter' && cardTitle.length) {

            dispatch({
                type: 'ADD_CARD',
                payload: {
                    board_id: props.boardId,
                    card: {
                        title: cardTitle,
                        description: cardDescription,
                        id: uuid.v4(),
                        type: props.type,
                        draggable:"true",
                        className:"card",
                        answer_type:0
                    }
                }
            });

            setCardTitle('');
            setCardDescription('');

        }
    };

    return (

            <div>
                <input
                    type="text" 
                    value={cardTitle}
                    onKeyPress={createCardByEnter}
                    onChange={event => setCardTitle(event.target.value)}
                    placeholder="From Title"
                /> 
                <input
                    type="text" 
                    value={cardDescription}
                    onKeyPress={createCardByEnter}
                    onChange={event => setCardDescription(event.target.value)}
                    placeholder="From Description(Optional)"
                /> 
                <div className="close-wrapper" style={{ "marginBottom":"20px" }}>
                    <button
                        onClick={createCard}
                    >Create</button>
                </div>
            </div>
    );
}

export default CardCreate;
