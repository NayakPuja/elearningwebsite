import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import Contact from './components/Contact';
import Event from './components/Event';
import Courses from './components/Courses';

import Logout from './components/Logout';
import ProtectedRoute from './ProtectedRoute';
function App() {
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);
  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: 'GET',
        headers: {

          Accept: "applictaion/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (res.status === 200) {
        setauth(true)
        setauth1(false)
      }
      if (res.status === 401) {
        setauth(false)
        setauth1(true)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <>
      <Navbar auth={auth1}/>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/event" component={Event} />
        <ProtectedRoute exact path="/register" component={Register} auth={auth1} />
        <ProtectedRoute exact path="/login" component={Login} auth={auth1} />
        <ProtectedRoute exact path="/event" component={Event} auth={auth} />
        <ProtectedRoute exact path="/logout" component={Logout} auth={auth} />

        <About />
      </Switch>
      <Footer />



    </ >
  );
}

export default App;