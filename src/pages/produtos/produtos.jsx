import React from 'react';
import Detalhes from '../../components/detalhesProduto/detalhes';
import ListaDeProdutos from '../../components/listaProdutos/listaDeProdutos';
import './produtos.css';

function Produtos() {
  return (
    <section>
      <h1>Produtos</h1>
      <button
        class="icon-btn add-btn">
        <div class="add-icon"></div>
        <div class="btn-txt">Novo Produto</div>
      </button>
      <ListaDeProdutos />
      <Detalhes />
    </section>
  );
}

export default Produtos;
