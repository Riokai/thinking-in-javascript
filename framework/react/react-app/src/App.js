import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Demo'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      num: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        num: this.state.num + 1
      })
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" style={{ marginBottom: 20}}>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Demo num={this.state.num} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
