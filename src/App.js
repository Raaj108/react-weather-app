import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import DailyForecast from './components/forecasts/DailyForecast';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Navbar></Navbar>
            <Route exact path="/" component={DailyForecast}></Route>            
        </div>
    </BrowserRouter>
  );
}

export default App;
