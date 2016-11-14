/**
 * Action Creator for the selected pokemon
 *
 * @param pokemon
 * @returns {{type: string}}
 */
export function selectPokemon(pokemon) {
	return {
		type: "POKEMON_SELECTED",
		payload: pokemon
	};
}