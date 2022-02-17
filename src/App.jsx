import './App.css';
import Primeiro from './components/Primeiro'
import Segundo from './components/Segundo'
import QualquerNome, { Component1, Component2 } from './components/Multi'

function App() {
  return (
    <div>
    <Primeiro />
    <Segundo />
    <QualquerNome />
    <Component1 />
    <Component2 />
    </div>
  );
}

export default App;
