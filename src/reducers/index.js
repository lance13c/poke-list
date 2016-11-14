import { combineReducers } from 'redux';
import PokeReducer from './reducer_pokemon';
import ActivePokemon from './reducer_active_pokemon';

const rootReducer = combineReducers({
  pokemon: PokeReducer,
  activePokemon: ActivePokemon
});

export default rootReducer;
