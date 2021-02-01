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

   componentDidMount() { 
    axios.get('').then(response => {
      this.setState({
        location: response.data.location,
      });
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={vinylcollection} className="App-vinylcollection" alt="vinyls" />
        <img src={vinyl} className="App-vinyl" alt="vinyl" />
        <p>
          Search for record stores locally!
          <SearchForm/>
        </p>
        
        <p>
            The Digger
        </p>
      </header>
    </div>
  );
};
}

export default App;
