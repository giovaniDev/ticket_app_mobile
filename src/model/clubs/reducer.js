const INITIAL_STATE = {
    clubs: [{
        name: 'Hello World'
    }]
}

export default function clubs(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ASYNC_GET_CLUBS':
            return {...state, data: [ ...state.data, {name: action.name} ]}
    
        default:
            return state;
    }
}