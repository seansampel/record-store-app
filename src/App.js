import React from 'react';
import vinyl from './vinyl.png';
// import axios from 'axios';
import vinylcollection from './vinylcollection.png';
import './App.css';
import SearchForm from './Components/SearchForm.js';
import NavBar from './NavBar/NavBar.js'; 
import LocationDetails from './Components/LocationDetails.js';
import { LocationDetails } from './Data/stores.json';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      location: {
        city: '',
        country: '',
        postcode: '',
      },
    };
    // this.handleSearchStoresClick = this.handleSearchStoresClick.bind(this);
  };
  // handleSearchStoresClick(city) {
  //   this.setState(state => ({
  //       location: Response.data.location,
  //   }))
  // }
  // componentDidMount() {
  //   axios.get('./Data/stores.json/location')
  //   this.setState({
  //     location: response.data.location
  //   });
  // };


// handleSearchStoresClick(city, postcode) {
//   axios
//     .get('./Data/stores.json/city, postcode?city, postcode=${city, postcode}')
//     .then(response => {
//       location: response.data.location
//     });
//   };
// };

  render() {
      
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={vinylcollection} className="App-vinylcollection" alt="vinyls" />
        <LocationDetails name={this.state.location.name} 
        city={this.state.location.city} 
        postcode={this.state.location.postcode}/>
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
