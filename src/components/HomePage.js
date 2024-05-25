import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productsActions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 6);

  return (
    <div>
      <h1>Produtos</h1>
      <div className="product-list">
        {randomProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>R$ {product.price}</p>
            <Link to={`/product/${product.id}`}>Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
