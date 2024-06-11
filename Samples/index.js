import React from 'react';
import ReactDOM from 'react-dom/client';
import AppClass from './AppClass.js';
import HelloWorld from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          <AppClass msg="hello, World! from Appclass" />
          {/* <HelloWorld msg="State usingFunctional component!"/> */}
        </div>
      </div>
    </div>
  </React.StrictMode>
);
