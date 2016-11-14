import React, { Component } from 'react';

import PokeList from '../containers/poke-list';
import PokeDetail from '../containers/poke-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
        <PokeList/>
        <PokeDetail/>
      </div>
    );
  }
}
