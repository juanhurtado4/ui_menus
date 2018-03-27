import React, { Component } from 'react';

const CharacterContainers = () => {
  // TODO: Make three containers. One for each character
  return (
    <main>
      <CharacterContainer />
    </main>
  )
};

class App extends Component {
  render() {
    return (
      <main>
        { characterContainers() }
      </main>
    );
  }
}

export default App;
