import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';

class App extends Component{

  constructor(props) {
    super(props);
    this.state={

    }
  }

  render() {
    return (
      <HashRouter>
      <div>
        <Main />
      </div>
      </HashRouter>
    )
  }
}

export default App;
