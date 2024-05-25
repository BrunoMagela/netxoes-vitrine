import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromFavorites } from '../redux/actions/favoritesActions';

const FavoritesPage = () => {
  const favorites = useSelector(state => state.favorites.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Favoritos</h1>
      <div className="favorites-list">
        {favorites.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>R$ {product.price}</p>
            <button onClick={() => dispatch(removeFromFavorites(product.id))}>Remover</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
