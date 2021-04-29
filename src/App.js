import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SearchMovie from "./components/SearchMovie" 

class App extends Component {
  render(){
    return (
      <div className="container">
        <h1 className="title">The Movie Search</h1>
        <SearchMovie/>
      </div>
    );
  }
}

export default App;
