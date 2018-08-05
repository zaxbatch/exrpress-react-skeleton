import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (
    	<div className="text-center">
        <h1>Welcome to my site</h1>
        <div>
          <form>
              <div className="form-group">
                <input type="text" className="form-control"placeholder="Enter name" />
                <label>Name</label>   
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
      </div>
      </div>
      
   );
  }
}


export default Home;
