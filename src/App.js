import React from 'react';
import vinyl from './vinyl.png';
import vinylcollection from './vinylcollection.png';
import './App.css';
import SearchForm from './Components/SearchForm.js';
import NavBar from './NavBar/NavBar.js'; 

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      location: {
        city: '',
        country: '',
      },
    };
  };
    render() {
      
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={vinylcollection} className="App-vinylcollection" alt="vinyls" />
        {/* <img src={eyes} className="eyes" alt="eyes" /> */}
        <p>
            The Digger
        </p>
        <img src={vinyl} className="App-vinyl" alt="vinyl" />
        <p>
          Search for record stores locally!
          <SearchForm/>
        </p>
        
      </header>
    </div>
    )};
  };

export default App;
