/*
 * @Author: 24min
 * @Date: 2020-05-11 20:12:47
 * @LastEditors: 24min
 * @LastEditTime: 2020-05-19 20:09:03
 * @Description: 
 */
import React from 'react';
import './App.css';
import Login from "./pages/login/login"
import Register from "./pages/register/register"
import Home from "./pages/home/home"
import Footer from "./components/footer/footer"
import NoMatch from './components/noMatch/noMatch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/home',
    component: Home
  }
]

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          {routes.map((item, index) =>
            (
              <Route key={index} path={item.path} exact={item.path === '/home' ? false : true}>
                <item.component />
              </Route>
            )
          )}
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </>
  );
}

export default App;
