import React from 'react';
import './App.css';
import Buttons from './Buttons';

function App() {
  return (
    <div className="App">
      <h1>Пример кнопок с увеличением счётчиков</h1>
      <Buttons count={5} /> {/* Здесь можно указать количество кнопок */}
    </div>
  );
}

export default App;
