import React from 'react';
import './App.css';
import AppProvider from './Context/AppProvider';
import Header from './Content/Header'
import Home from './Page/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

function App() {
  return (

    <AppProvider>
      <div className="App">
        <Header />
        <Home />
        {/* <Router> */}
        {/* </Router> */}
      </div>
    </AppProvider>

  );
}

export default App;
