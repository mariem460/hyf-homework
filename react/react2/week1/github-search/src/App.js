import logo from './logo.svg';
import './App.css';
import React from 'react';
import GithubOverView from './GithubOverView';
import Search from './Search';



function App() {
 
  return (
    <div className="App">
      <h1>Github search</h1>
      <Search/>
    </div>
  );
}

export default App;
