import './App.css';
import { Route, Switch } from 'react-router-dom';
import Produtos from './pages/produtos/produtos';
import NovoProduto from './components/novoProduto/novoProduto';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Produtos } />
      <Route exact path="/novoproduto" component={ NovoProduto } />
    </Switch>
  );
}

export default App;
