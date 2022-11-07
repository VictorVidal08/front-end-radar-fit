import axios from 'axios';

export async function getProducts() {
  const response = await axios.get('http://localhost:3001/produtos');
  return response;
}

export async function createNewProduct(productInfo) {
    const response = await fetch('http://localhost:3001/produtos', {
      method: 'post',
      body: JSON.stringify({
        produto: productInfo.produto,
        valor: productInfo.valor,
        descricao: productInfo.descricao,
      }),
    });
    const newProduct = await response.json();
    return newProduct;
  }