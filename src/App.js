// Dependencies
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

// Components
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import BulkPosts from './Components/BulkPosts/BulkPosts';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={BulkPosts} />
        <Route exact path='/contact' component={Contact} />
        <Route render={() => <Redirect to={{pathname: "/"}} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;