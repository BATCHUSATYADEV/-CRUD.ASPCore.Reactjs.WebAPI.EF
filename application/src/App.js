import logo from './logo.svg';
import './App.css';
import Home from './component/Home'
import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Add from './component/Add';
import Edit from './component/Edit';
import { render } from '@testing-library/react';

class App extends Component{

render() 
{
  return (
    <div className="App">

      <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/create" element={<Add/>} />
      <Route path="/edit" element={<Edit/>} />
      </Routes>
      </Router>
    </div>
  );
}
}
// render(){
//   return(
//     <div className='App'>
//     <button>press</button>
//     </div>
//   );
// }
export default App;
