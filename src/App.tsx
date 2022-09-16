import { createContext, useReducer } from 'react';
import './App.css';
import InterfaceProps from './Components/InterfaceProps';
import Props from './Components/Props';
import { actionType, initialState, Reducer } from './Components/Reducer';
import Todo from './Components/Todo';
import User from './Components/User';

type contextType = {
  state: typeof initialState,
  dispatch: React.Dispatch<actionType>,
}

export const UserContext = createContext({} as contextType);

function App() {

  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="App-header">
        <Props ts="TypeScript" />
        <Props>
          React TypeScript
        </Props>
        <InterfaceProps lang=".JS" data="Next" />
        <Todo />
        <User />
      </div>
    </UserContext.Provider>
  );
}

export default App;