const BASE_STATE =  [
    {
        id: 'board-1',
        type: 1,
        className:'board',
        canBeAdded: true,
        boardName: 'Наряды',
        color: 'grey',
        cards: [
            { id:"card-1", className:"card", draggable:"true", type: 1, title: 'cardOne',description: 'hello CardOne',answer_type:'1' },
        ] },
];

export default BASE_STATE;
 