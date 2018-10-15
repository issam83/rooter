import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter ,Switch, NavLink, Route} from "react-router-dom"
import Home from './Home';
import History from './History';



class App extends Component {
  render() {
    return (
     
      <BrowserRouter>
       <div className="style">
        
             <NavLink className="title" activeClassName="active"
               exact to="/"
               activeStyle={{ color: "red" }}
               >Bienvenue
               </NavLink>
      
             <NavLink activeClassName="active"
              exact to="/notre-histoire"
              activeStyle={{ color: "red" }}
              >Notre-histoire</NavLink>
      
         <Switch>
           <Route exact path="/" component={Home} />
           <Route path="/notre-histoire" activeClassName="selected" component={History} />
         </Switch>
         </div>
       
      </BrowserRouter>
    );
  }
}

export default App;
