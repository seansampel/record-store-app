import React from 'react';
import { useState, useEffect } from 'react';
import vinyl from './vinyl.png';
import vinylcollection from './vinylcollection.png';
import NavBar from './NavBar/NavBar';
import StoreList from './Components/StoreList';
import './App.css';
import './Components/styles.css';
import axios from 'axios';



const App = () => {

    const [stores, setStores] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
  const fetchStores = async () => {
    const result = await axios(
      `https://gist.githubusercontent.com/seansampel/6c70584d266c5305783e8b35ce3b1a00/raw/8bbb93593065bd44194b439a98a0f7e1fa01cac2/stores.json`
    )
    console.log(result.data)
    setStores(result.data)
    setIsLoading(false)
  }
  fetchStores();
   }, [])



return (
    <div className="App">
      <div className="center">
        <NavBar/>
        <img src={vinylcollection} className="App-vinylcollection" alt="vinyls" />
          <p>
            The Digger
          </p>
        <img src={vinyl} className="App-vinyl" alt="vinyl" />
          <p>
            Search for record stores locally!
          </p>
        <div id="store-search">
        <StoreList isLoading={isLoading} stores={stores}/>
        </div>
      </div>
    </div>
    );
}


export default App;
