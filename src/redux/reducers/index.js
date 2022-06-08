import {combineReducer} from 'redux';
import { productReducer } from '../store';

const reducers=combineReducer({
    allProducts: productReducer,
});
export default reducers;