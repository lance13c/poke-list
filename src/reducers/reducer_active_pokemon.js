/**
 * Created by Lance on 11/13/2016.
 */

/**
 * @param state - The one the reducer is responsible for
 * @param action
 */
export default function (state = null, action) {
	switch (action.type) {
		case "POKEMON_SELECTED":
			return action.payload;
	}
	
	return state;
}