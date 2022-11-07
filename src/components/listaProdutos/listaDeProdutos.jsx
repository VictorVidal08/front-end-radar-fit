import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../../service/requests';
import './listaDeProdutos.css';
import { BsTagFill } from '@react-icons/all-files/bs/BsTagFill'
import { fakeProducts } from '../../utils';

function ListaDeProdutos() {

    const history = useHistory();
    
    useEffect(() => {
        const fetchProducts = async () => {
          const { data } = await getProducts();
          console.log(data);
          localStorage.setItem('products', JSON.stringify(data));
        };
        fetchProducts();
      }, []);

  return (
    <section class="products-container">
      { fakeProducts.map((product) => (
        <div class="card">
            <div>
                <h4>{ product.produto }</h4>
                <p>Eletrônico</p>
                {/* { categoria do produto não foi informada no README do backend } */}
                <p>{ `R$: ${ product.valor }` }</p>
            </div>
            <button
                class="tag-btn"
                id={ product._id }
                onClick={ () => {
                    history.push('/produtos/detalhes');
                  } }
            >
            <BsTagFill />
            </button>
        </div>
      )) }
    </section>
  );
}

export default ListaDeProdutos;
