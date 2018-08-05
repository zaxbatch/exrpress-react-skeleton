import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (
    	<div class="text-center">
        <h1>Welcome to my site</h1>
        <div>
          <form>
              <div class="form-group">
                <input type="text" class="form-control"placeholder="Enter name" />
                <label>Name</label>   
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
      </div>
      </div>
      
   );
  }
}


export default Home;
