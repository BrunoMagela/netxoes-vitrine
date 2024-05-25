import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  favorites: favoritesReducer
});

export default rootReducer;
