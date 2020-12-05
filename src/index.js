import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Slots from './Slotm';
ReactDOM.render(
  <>
    <App />
   {/* <Slotm/> */}
   <Slots/>
  </>,
  document.getElementById('root')
);

