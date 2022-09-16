import { useReducer } from 'react';
import './App.css';
import InterfaceProps from './Components/InterfaceProps';
import Props from './Components/Props';
import { initialState, Reducer } from './Components/Reducer';
import Todo from './Components/Todo';
import User from './Components/User';

function App() {

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="App-header">
      <Props ts="TypeScript" />
      <Props>
        React TypeScript
      </Props>
      <InterfaceProps lang=".JS" data="Next" />
      <Todo />
      <User />
    </div>
  );
}

export default App;