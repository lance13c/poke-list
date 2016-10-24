import { combineReducers } from 'redux';
import PokeReducer from './reducer_pokemon';

const rootReducer = combineReducers({
	books: PokeReducer
});

export default rootReducer;