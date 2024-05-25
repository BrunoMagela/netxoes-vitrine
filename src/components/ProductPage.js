import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToFavorites } from '../redux/actions/favoritesActions';

const ProductPage = () => {
  const { id } = useParams();
  const product = useSelector(state => state.products.products.find(p => p.id === parseInt(id)));
  const dispatch = useDispatch();

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  const maxInstallments = Math.max(Math.floor(product.price / 10), 1);
  const installmentValue = (product.price * 1.0199) / maxInstallments;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>R$ {product.price}</p>
      <p>
        Em até {maxInstallments}x de R$ {installmentValue.toFixed(2)} com juros de 1.99% a.m.
      </p>
      <button onClick={() => dispatch(addToFavorites(product))}>Favoritar</button>
    </div>
  );
};

export default ProductPage;
