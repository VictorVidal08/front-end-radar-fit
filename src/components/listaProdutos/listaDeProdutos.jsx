import React, { useEffect } from 'react';
import { getProducts } from '../../service/requests';

function ListaDeProdutos() {
    useEffect(() => {
        const fetchProducts = async () => {
          const { data } = await getProducts();
          console.log(data);
          localStorage.setItem('products', JSON.stringify(data));
        };
        fetchProducts();
      }, []);
  return (
    <section>
      <h2>ListaDeProdutos</h2>
    </section>
  );
}

export default ListaDeProdutos;
