import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Todo from './components/Todo';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);

