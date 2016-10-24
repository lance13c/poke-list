/**
 * Created by Lance on 10/24/2016.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'

class PokeList extends Component {
	renderList() {
		return this.props.books.map((pokemon) => {
			return (
				<li className="list-group-item"> {pokemon.name} </li>
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
		books: state.books
	}
}

export default connect(mapStateToProps)(PokeList);