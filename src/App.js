import React, { Component } from 'react';
// import SampleContainer from './redux/containers/SampleContainer'
import PlayersListContainer from './redux/containers/PlayersListContainer';
import AddPlayerContainer from './redux/containers/AddPlayerContainer';

class App extends Component {
  render() {
    return (
      <div>
        {/* <SampleContainer /> */}
        <AddPlayerContainer />
        <PlayersListContainer />
      </div>
    );
  }
}

export default App;
