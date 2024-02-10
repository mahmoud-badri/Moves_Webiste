import { combineReducers } from "redux";
import number from './CountRedus';
import movesReducer from "./moves/movesReducer";
import combineSearch from "./SearchReducer";
import cartSlice from "./moves/cart-slice";
export default combineReducers({
    combineNum: number,
    moves: movesReducer,
    combinSearch: combineSearch,
    cart: cartSlice
})


