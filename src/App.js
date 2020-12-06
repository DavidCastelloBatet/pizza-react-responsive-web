import './App.css';

import About from './components/About';
import Clients from './components/Clients';
import Header from './components/Header';
import Menu from './components/Menu';
import Prices from './components/Prices';
import Shop from './components/Shop'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
      <Prices />
    </div>
  );
}

export default App;
