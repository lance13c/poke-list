/**
 * Created by Lance on 10/24/2016.
 */
import React from 'react';
import { Component } from 'react';

import PokeList from '../containers/poke-list';

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