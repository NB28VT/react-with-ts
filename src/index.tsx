import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Hello from './components/hello';
// import StatefulHello from './components/StatefulHello';


// Note "as HTMLElement", this is a type assertion or cast.
// Tells TS what the real type of an expression is
ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={10}/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
