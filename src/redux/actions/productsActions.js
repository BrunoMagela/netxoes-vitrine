import axios from 'axios';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

export const fetchProducts = () => async dispatch => {
  try {
    const response = await axios.get('URL_DA_API_DE_PRODUTOS');
    dispatch({
      type: FETCH_PRODUCTS_SUCCESS,
      payload: response.data
    });
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
  }
};
