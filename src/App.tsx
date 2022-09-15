import React from 'react';
import './App.css';
import InterfaceProps from './Components/InterfaceProps';
import Props from './Components/Props';

function App() {
  return (
    <div className="App-header">
      <Props ts="TypeScript" />
      <Props>
        React TypeScript
      </Props>
      <InterfaceProps lang=".JS" data="Next" />
    </div>
  );
}

export default App;