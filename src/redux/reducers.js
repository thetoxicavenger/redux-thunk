import { SAMPLE_ACTION, RECEIVE_PLAYERS, ADD_NEW_PLAYER } from './actions'

const initialState = {
    sample: false,
    players: []
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SAMPLE_ACTION:
            return {
                ...state,
                sample: action.payload
            }
        case RECEIVE_PLAYERS:
            return {
                ...state,
                players: action.payload
            }
        case ADD_NEW_PLAYER:
            return {
                ...state,
                players: [
                    ...state.players,
                    action.payload
                ]
            }
        default:
            return state;
    }
}

export default reducer