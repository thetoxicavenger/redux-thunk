// action type
export const SAMPLE_ACTION = 'SAMPLE_ACTION'
// action creator, which returns an action
export const sampleAction = payload => {
    return {
        type: SAMPLE_ACTION,
        payload
    }
}

// thunk
export const getPlayers = () => dispatch => fetch('http://localhost:3001/players')
.then(res => res.json())
.then(json => {
    dispatch(
        receivePlayers(json)
    )
})
.catch(e => console.log(e))
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS'
export const receivePlayers = players => {
    return {
        type: RECEIVE_PLAYERS,
        payload: players
    }
}

export const addPlayer = player => dispatch => fetch('http://localhost:3001/players')
.then(res => {
    return dispatch(
        addNewPlayer(player)
    )
})
.catch(e => {
    console.log(e)
})
export const ADD_NEW_PLAYER = 'ADD_NEW_PLAYER'
export const addNewPlayer = newPlayer => {
    return {
        type: ADD_NEW_PLAYER,
        payload: newPlayer
    }
}