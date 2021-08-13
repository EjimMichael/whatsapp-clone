import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      {!user ? ( <h1>LOGIN</h1>): (
        <div className="app__body">
        <Router>
          <Sidebar />
            <Switch>          
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </Router> 
        
      </div> 
      )}

    </div>
  );
}

export default App; 
