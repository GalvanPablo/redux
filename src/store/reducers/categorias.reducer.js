import { CATEGORIAS } from '../../data/categorias';

import { CATEGORIA_SELECIONADA } from '../actions/categorias.action';


const initialState = {
    categorias: CATEGORIAS,
    categoriaSelecionada: null
};

const CategoriasReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIA_SELECIONADA:
            return {
                ...state,
                categoriaSelecionada: state.categorias.find(cat => cat.id === action.id)
            }
        default:
            return state;
    }
}

export default CategoriasReducer;