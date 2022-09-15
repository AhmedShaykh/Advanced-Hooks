import './App.css';
import InterfaceProps from './Components/InterfaceProps';
import Props from './Components/Props';
import Todo from './Components/Todo';
import { Text, Center } from '@chakra-ui/react';

function App() {
  return (
    <div className="App-header">
      <Text fontSize='45px' textAlign="ceter">
        <Props ts="TypeScript" />
        <Props>
          React TypeScript
        </Props>
        <InterfaceProps lang=".JS" data="Next" />
        <br />
        <Todo />
      </Text>
    </div>
  );
}

export default App;