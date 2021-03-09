import * as uuid from "uuid";

export default function(state, action) {
    switch (action.type) {
        // when you need to add a card , it is executed
      case 'UPDATE_CARDS':
        return state.map(board => {

            if (board.id === action.payload.board_old_id) {
                const cardIndex = board.cards.findIndex(card => card.id === action.payload.card_id);
                board.cards.splice(cardIndex, 1);	
            }   

            if (board.id === action.payload.board_new_id) {

                board.cards.push(action.payload.card);

            }
            console.log('UPDATE_CARDS',board.cards);
            return board;
        });
        case 'UPDATE_TITLE_CARDS':
            // when you update title of the card , it is executed
            return state.map(board => {
    
                if (board.id === action.payload.board_old_id) {
                    
                    const cardIndex = board.cards.findIndex(card => card.id === action.payload.card_id);

                    board.cards[cardIndex].title = action.payload.title;
                }
    
                if (board.id === action.payload.board_new_id) {
    
                    board.cards.push(action.payload.card);
    
                }
                return board;
            });
        case 'UPDATE_TYPE_CARDS':
            // when you update the type of card , it is executed
            return state.map(board => {
                if (board.id === action.payload.board_old_id) {
                    
                    const cardIndex = board.cards.findIndex(card => card.id === action.payload.card_id);
                    board.cards[cardIndex].answer_type = action.payload.answer_type;

                }
    
                if (board.id === action.payload.board_new_id) {
    
                    board.cards.push(action.payload.card);
    
                }
                return board;
            });
        case 'REMOVE_CARDS':
            // when you update the type of card , it is executed
            return state.map(board => {
                if (board.id === action.payload.board_old_id) {
                    
                    const cardIndex = board.cards.findIndex(card => card.id === action.payload.card_id);
                    
                    board.cards.splice(cardIndex, 1);	
                }
    
                // if (board.id === action.payload.board_new_id) {
    
                //     board.cards.push(action.payload.card);
    
                // }
                return board;
            });
        case 'DUPLICATE_CARDS':
            // when you update the type of card , it is executed
            return state.map(board => {
                if (board.id === action.payload.board_old_id) {
                    
                    const cardIndex = board.cards.findIndex(card => card.id === action.payload.card_id);
                    let p2 = Object.assign({}, board.cards[cardIndex]);
                    p2.id = uuid.v4();
                    board.cards.splice(cardIndex, 0,p2);	
                }
    
                // if (board.id === action.payload.board_new_id) {
    
                //     board.cards.push(action.payload.card);f
    
                // }
                return board;
            });
      case 'ADD_CARD':
       return state.map(board => {

            if (board.id === action.payload.board_id) {

                board.cards.push(action.payload.card);
            }
            console.log("Add Card", board.cards);
            return board;
        });

      default:
        return state;
    }
}

