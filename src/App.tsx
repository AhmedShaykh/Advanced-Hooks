import './App.css';
import InterfaceProps from './Components/InterfaceProps';
import Props from './Components/Props';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="App-header">
      <Props ts="TypeScript" />
      <Props>
        React TypeScript
      </Props>
      
      <InterfaceProps lang=".JS" data="Next" />
      <Todo />
    </div>
  );
}

export default App;