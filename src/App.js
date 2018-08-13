import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
    
//       </div>
//     );
//   }
// }

// export default App;

export const Home = () => {
  return (
    <div className="title">
    <h1>Ini Home</h1>
    <Link to="/list"><button>Show</button></Link>
    </div>
  )
}

export const List = () => {
  return (
    <div className="nav">
    <ul>
      <li>List</li>
      <li>List</li>
    </ul>
    <Link to="/"><button>Back Home</button></Link>
    </div>
  )
}
