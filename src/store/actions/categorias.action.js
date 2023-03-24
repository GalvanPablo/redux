export const SELECIONAR_CATEGORIA = 'SELECIONAR_CATEGORIA';

export const selecionarCategoria = (id) => {
    return {
        type: SELECIONAR_CATEGORIA,
        id
    }
}