import { CATEGORIAS } from '../../data/categorias';
import { SELECIONAR_CATEGORIA } from '../actions/categorias.action';

const initialState = {
    categorias: CATEGORIAS,
    seleccionada: null
};

const CategoriasReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECIONAR_CATEGORIA:
            const indexCategory = state.categorias.findIndex(cat => cat.id === action.id);
            return indexCategory >= 0 ? {
                ...state, seleccionada: state.categorias[indexCategory]
            } : state;
        default:
            return state;
    }
}

export default CategoriasReducer;