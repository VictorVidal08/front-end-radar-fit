import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdEdit } from '@react-icons/all-files/md/MdEdit'
import './detalhes.css';

function Detalhes() {

    const history = useHistory();

    const fakeProduct = [
        {
          "_id": "6366ae6d46ec69aa5de97dd8",
          "produto": "celular",
          "valor": 2200,
          "descricao": "o top do momento",
          "created": "1970-01-01T00:00:00.000Z",
          "updated": "1970-01-01T00:00:00.000Z"
        }]
  return (
    <section>
      <h2>Detalhes</h2>
      { fakeProduct.map((product) => (
        <div>
            <h3>{ product.produto }</h3>
            <p>{ `Valor R$: ${ product.valor }` }</p>
            <p>{  product.descricao }</p>
            <button class="edit-btn">
                <MdEdit />
                Editar
            </button>
            <button
              onClick={ () => {
                history.push('/');
              } }
            >
                Voltar
            </button>
        </div>
      )) }
    </section>
  );
}

export default Detalhes;
