import React from 'react';
import vinyl from './vinyl.png';
import vinylcollection from './vinylcollection.png';
import './App.css';
import SearchForm from './Components/SearchForm.js';
import NavBar from './NavBar/NavBar.js'; 
import LocationDetails from './Components/LocationDetails.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      location: {
        name: '',
        city: '',
        postcode: '',
      },
    };
    this.handleSearchStoresClick = this.handleSearchStoresClick.bind(this);
  };
  handleSearchStoresClick(location) {
    this.setState(state => ({
        location: Response.location,
    }))
  }
  async componentDidMount(location) {
    const url = "./Data/stores.mockend.json/location"
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      location: data.response.location,
    });
  };


handleSearchStoresClickInput(name, city, postcode) {
  
    fetch(`./Data/stores.mockend.json/location=${name, city, postcode}`)
    .then(response => {
      this.setState({
      location: response.data.location,
    });
  })
  .catch(() => {
    console.error('No results');
  });
};

  render() {
      
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={vinylcollection} className="App-vinylcollection" alt="vinyls" />
        <LocationDetails name={this.state.location} 
        city={this.state.location} 
        postcode={this.state.location}/>
        <p>
            The Digger
        </p>
        <img src={vinyl} className="App-vinyl" alt="vinyl" />
        <p>
          Search for record stores locally!
          <SearchForm handleSearchStoresClick={this.handleSearchStoresClick} />
        </p>
      </header>
    </div>
    )};
  };

export default App;
