import React, { Component } from 'react'
import Player from './Player';

export default class PlayersList extends Component {
  componentDidMount = async () => {
      this.props.getPlayers()
  }
  render() {
    const { players } = this.props
    const allPlayers = players.length > 0 ? players.map(player => {
      return <Player key={player.id} {...player} />
    }) : null
    return (
      <div>
        {allPlayers}
      </div>
    )
  }
}
