import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Now from './components/forecasts/Now';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/forecast/:country/:city/:key" component={Now}></Route>  
            </Switch>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
