import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createNewProduct } from '../../service/requests';

function NovoProduto() {
  const [produto, setProduto] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');
  const [enable, setEnable] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const MIN_PRODUTO_LENGTH = 2;
    const MIN_VALOR_LENGTH = 1;
    const MIN_DESCRICAO_LENGTH = 1;

    if (
      produto.length >= MIN_PRODUTO_LENGTH
      && valor.length >= MIN_VALOR_LENGTH
      && descricao.length >= MIN_DESCRICAO_LENGTH
    ) {
      setEnable(false);
    } else {
      setEnable(true);
    }
  }, [produto, valor, descricao]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createNewProduct({ produto, valor, descricao });

    history.push('/');
  };
  return (
    <section>
      <h2>NovoProduto</h2>
      <form onSubmit={ (e) => handleSubmit(e) } >
      <label htmlFor="produto-input">
          Produto:
          <br />
          <input
            type="text"
            id="produto-input"
            value={ produto }
            onChange={ ({ target }) => setProduto(target.value) }
          />
        </label>
        <br />
        <label htmlFor="descricao-input">
          Descricao:
          <br />
          <input
            type="text"
            id="descricao-input"
            value={ descricao }
            onChange={ ({ target }) => setDescricao(target.value) }
          />
        </label>
        <br />
        <label htmlFor="valor-input">
          Valor:
          <br />
          <input
            type="text"
            id="valor-input"
            value={ valor }
            onChange={ ({ target }) => setValor(target.value) }
          />
        </label>
      </form>
      <button
        onClick={ () => {
            history.push('/');
          } }
      >
        Fechar
      </button>
      <button
        type="submit"
        disabled={ enable }
      >
        Add
      </button>
    </section>
  );
}

export default NovoProduto;
