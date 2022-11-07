import { Route, Switch } from 'react-router-dom';
import Produtos from './pages/produtos/produtos';
import NovoProduto from './components/novoProduto/novoProduto';
import Detalhes from './components/detalhesProduto/detalhes';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Produtos } />
      <Route exact path="/novoproduto" component={ NovoProduto } />
      <Route exact path="/produtos/detalhes" component={ Detalhes } />
    </Switch>
  );
}

export default App;
