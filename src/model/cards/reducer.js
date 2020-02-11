const INITIAL_STATE = {
    cards: [{
        name: 'Hello World cards'
    }]
}

export default function cards(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ASYNC_GET_CARDS':
            return {...state, data: [ ...state.data, {name: action.name} ]}
    
        default:
            return state;
    }
}