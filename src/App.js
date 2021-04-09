import React from 'react';
import vinyl from './vinyl.png';
import vinylcollection from './vinylcollection.png';
import NavBar from './NavBar/NavBar';
import Stores from './Components/Stores';
import './App.css';



function App () {

    return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={vinylcollection} className="App-vinylcollection" alt="vinyls" />
        <p>
        The Digger
        </p>
        <img src={vinyl} className="App-vinyl" alt="vinyl" />
        <p>
        Search for record stores locally!
        </p>
        <Stores/>
      </header>
    </div>
    );
}


export default App;
