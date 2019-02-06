import { connect } from 'react-redux'
import AddPlayer from '../../components/AddPlayer'
import { addNewPlayer } from '../actions';


const mapDispatchToProps = dispatch => {
    return {
        addNewPlayer: newPlayer => {
            return dispatch(
                addNewPlayer(newPlayer)
            )
        }
    }
}

export default connect(null, mapDispatchToProps)(AddPlayer)