import React from 'react';
import { useHistory } from 'react-router-dom';
import Detalhes from '../../components/detalhesProduto/detalhes';
import ListaDeProdutos from '../../components/listaProdutos/listaDeProdutos';
import './produtos.css';

function Produtos() {
  const history = useHistory();
  return (
    <section>
      <h1>Produtos</h1>
      <button
        onClick={ () => {
          history.push('/novoproduto');
        } }
        class="icon-btn add-btn"
      >
        <div class="add-icon"></div>
        <div class="btn-txt">Novo Produto</div>
      </button>
      <ListaDeProdutos />
      <Detalhes />
    </section>
  );
}

export default Produtos;
