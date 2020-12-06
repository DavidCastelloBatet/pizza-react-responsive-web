import './App.css';

import About from './components/About';
import Clients from './components/Clients';
import Header from './components/Header';
import Menu from './components/Menu';
import Shop from './components/Shop'

function App() {
  return (
    <div>
      <Header />
      <About />
      <Shop />
      <Menu />
      <Clients />
    </div>
  );
}

export default App;
