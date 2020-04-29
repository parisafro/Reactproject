import React, { Component } from 'react';
import HelloWorld from './Components/HelloWorld';
import './App.css';

class App extends Component{
  render(){
    return (
      <div style={{textAlign:"center"}}>
        <HelloWorld/>
      </div>
    )
  }
};

export default App;
