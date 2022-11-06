import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../../service/requests';
import './listaDeProdutos.css';
import { BsTagFill } from '@react-icons/all-files/bs/BsTagFill'

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

const fakeProducts = [
    {
      "_id": "6366ae6d46ec69aa5de97dd8",
      "produto": "celular",
      "valor": 2200,
      "descricao": "o top do momento",
      "created": "1970-01-01T00:00:00.000Z",
      "updated": "1970-01-01T00:00:00.000Z"
    },
    {
      "_id": "6366ae6d46ec69aa5de97dd9",
      "produto": "esteira",
      "valor": 4000,
      "descricao": "corre sozinha",
      "created": "1970-01-01T00:00:00.000Z",
      "updated": "1970-01-01T00:00:00.000Z"
    },
    {
      "_id": "6366ae6d46ec69aa5de97dda",
      "produto": "alexa",
      "valor": 500,
      "descricao": "companheira",
      "created": "1970-01-01T00:00:00.000Z",
      "updated": "1970-01-01T00:00:00.000Z"
    },
    {
      "_id": "6366ae6d46ec69aa5de97ddb",
      "produto": "halter 1200kg",
      "valor": 1200,
      "descricao": "pesado demais",
      "created": "1970-01-01T00:00:00.000Z",
      "updated": "1970-01-01T00:00:00.000Z"
    }
  ]

  return (
    <section>
      <h2>ListaDeProdutos</h2>
      { fakeProducts.map((product) => (
        <div>
            <p>{ product.produto }</p>
            <p>Eletrônico</p>
            {/* { categoria do produto não foi informada no README do backend } */}
            <p>{ `R$: ${ product.valor }` }</p>
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
