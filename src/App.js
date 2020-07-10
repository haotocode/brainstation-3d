import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.scss';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import About from './Component/About/About'
import Features from './Component/Features/Features'
import Pricing from './Component/Pricing/Pricing'
import ContactUs from './Component/ContactUs/ContactUs'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/features" exact component={Features}></Route>
          <Route path="/pricing" exact component={Pricing}></Route>
          {/* <Route path="/contact" exact component={ContactUs}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
