import React, { Component } from 'react';
import './App.css';
import Menu from './Menu';
import Welcome from './Welcome';
import Card from './Card';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
//  Link,
//  Switch,
//  Redirect
} from 'react-router-dom';


class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div classname='container'>
        <Menu />
        <Router>
              <div>
             <Route exact path="/" component={Home} />
             <Route path="/welcome" component={Welcome} />
             <Route path="/card" component={Card} />
             </div>
        </Router>
        
      </div>

    );
  }
}

export default App;
