import React, { Component } from 'react';

import PokeList from '../containers/poke-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
        <PokeList/>
      </div>
    );
  }
}
