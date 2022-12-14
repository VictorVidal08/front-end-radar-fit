import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdEdit } from '@react-icons/all-files/md/MdEdit'
import './detalhes.css';
import { fakeProduct } from '../../utils';

function Detalhes() {

    const history = useHistory();

  return (
    <section class="details-container">
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
