import React from 'react';
import './scss/main.scss'
import Header from './components/header';
import Content from './components/content/content'
import store from './store/store'
console.log(store);
function App() {
  return (
    <div className ="app">
      <div className = "app-inner">
      <Header store ={store}></Header>
      <Content store ={store}></Content>
      </div>
    </div>
  );
}

export default App;
