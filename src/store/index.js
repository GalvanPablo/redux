import { createStore, combineReducers } from "redux";

import CategoriasReducer from "./reducers/categorias.reducer";

const RootReducer = combineReducers({
    categorias: CategoriasReducer
})

export default createStore(RootReducer);