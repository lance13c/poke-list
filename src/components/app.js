/**
 * Created by Lance on 10/24/2016.
 */
import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

import PokeList from '../containers/poke-list';

const containerElement = document.querySelector('.container');

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>React Pokemon List</h1>
				<PokeList/>
			</div>
		)
	}
}

// Take this component's generated HTML and put it on the Page
ReactDOM.render(<App />, containerElement);