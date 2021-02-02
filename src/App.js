import React from 'react';
import vinyl from './vinyl.png';
import vinylcollection from './vinylcollection.png';
import './App.css';
import SearchForm from './SearchForm.js';

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
        <img src={vinylcollection} className="App-vinylcollection" alt="vinyls" />
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
