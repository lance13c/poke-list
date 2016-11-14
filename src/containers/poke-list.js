/**
 * Created by Lance on 10/24/2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPokemon } from '../actions/index';
import { bindActionCreators } from 'redux';

class PokeList extends Component {
	renderList() {
		return this.props.pokemon.map((poke) => {
			return (
				<li className="list-group-item"
				    key={poke.name}
						onClick={() => this.props.selectPokemon(poke)}>
					{poke.name}
				</li>
			);
		});
	}
	
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// Whatever is returned will be the props in Poke List
	
	return {
		pokemon: state.pokemon
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectPokemon: selectPokemon}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeList);