/**
 * Created by Lance on 11/13/2016.
 */

import React, {Component} from 'react';
import { connect } from 'react-redux';

export class PokeDetail extends Component {
	render() {
		
		if (!this.props.pokemon) {
			return <div>Select Pokemon to get Started</div>
		}
		
		return (
			<div>
				{this.props.pokemon.name}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		pokemon: state.activePokemon
	}
}

export default connect(mapStateToProps)(PokeDetail);