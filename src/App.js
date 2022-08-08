
import './style/App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      advice: ''
    }
  }

  componentDidMount() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(json => this.setState({
        advice: json.slip
      }));
  }

  getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(json => this.setState({
        advice: json.slip
      }));
  }

  render() { 
    return (
      <div className="App">
        <main>
          <div className="advice-card">
            <div className="header">ADVICE #{this.state.advice.id}</div>
            <h1>“{this.state.advice.advice}”</h1>
            <div className="divider"></div>
          </div>
            <div className="dice-btn" onClick={this.getAdvice}></div>
        </main>
      </div>
      )
    };
}

export default App;