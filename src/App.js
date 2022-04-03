import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'UndersunIO'
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            salut {this.state.name}
          </p>
          <button
            onClick={() => {
              this.setState({name: 'Platon'})
            }}
          > Click </button>
        </header>
      </div>
    );
  }
}

export default App;
