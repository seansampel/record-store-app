import React from 'react';
import { useState, useEffect } from 'react';
import vinyl from './vinyl.png';
import vinylcollection from './vinylcollection.png';
import NavBar from './NavBar/NavBar';
import StoreList from './Components/StoreList';
import './App.css';
import './Components/styles.css';
import axios from 'axios';
import SearchButton from './Components/SearchButton';


const App = () => {

    const [stores, setStores] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')
  
    useEffect(() => {
  const fetchStores = async () => {
    const result = await axios(
      `https://gist.githubusercontent.com/seansampel/6c70584d266c5305783e8b35ce3b1a00/raw/e3bbce16d315697dfbf40fdf9d32f6998401d2a7/stores.json?postcode=${query}`
    )
    // console.log(result.data)
    setStores(result.data)
    setIsLoading(false)
  }
  fetchStores();
   }, [query])



return (
    <div className="App">
      <div className="center">
        <NavBar/>
        <img src={vinylcollection} className="App-vinylcollection" alt="vinyls" />
          <p className="Digger">
            The Digger
          </p>
        <img src={vinyl} className="App-vinyl" alt="vinyl" />
          <p className="search-tag">
            Search for record stores locally!
          </p>
        <div id="store-search">
        <StoreList isLoading={isLoading} stores={stores}/>
        <SearchButton getQuery={(q) => setQuery(q)}/>
        </div>
      </div>
    </div>
    );
}


export default App;
