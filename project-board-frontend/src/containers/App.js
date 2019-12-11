// Starting with base import
import React from 'react';
// Since App is in containers directory and 
import '../css/App.css';
import 'materialize-css/dist/css/materialize.min.css';
// Importing my other containers in the app
import MainContainer from './MainContainer';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col s8">
            <Nav />
          </div>
        </div>

        <div className="row">
        </div>

        <div className="row">
          <div className="col s8">
            <MainContainer />
          </div>
        </div>  
      </div>
    </div>
  );
}

// Export the App component so that the index.js file has the access to render the entire application
export default App;