import React,  { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Showcase from './components/layout/Showcase';
import Closets from './components/layout/Closets';
import Shirts from './components/layout/Shirts';
import './App.css';
import Footer from './components/layout/Footer';

class App extends Component {

  render() {
    
    
      return (
        <div className="App">
          <Navbar />
          <Showcase />
          <div className="container">
          <Closets />
          <Shirts />
          </div>
          <Footer />
        </div>
      );
  }
}

export default App;
