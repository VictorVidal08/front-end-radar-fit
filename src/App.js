import './App.css';
import { Route, Switch } from 'react-router-dom';
import Produtos from './pages/produtos/produtos';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Produtos } />
    </Switch>
  );
}

export default App;
