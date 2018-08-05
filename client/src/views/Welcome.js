import React, { Component } from 'react';
import './App.css';

class Welcome extends Component {
  render() {
    return (
    	<div className="jumbotron jumbotron-fluid">
  			<div className="container">
    			<h1 className="display-4">Welcome</h1>
    			<p className="lead">name here</p>
  			</div>
		</div>
   );
  }
}


export default Welcome;
