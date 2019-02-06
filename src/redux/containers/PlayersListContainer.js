import { connect } from 'react-redux'
import { getPlayers } from '../actions'
import PlayersList from '../../components/PlayersList'

const mapStateToProps = state => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPlayers: () => dispatch(getPlayers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersList)