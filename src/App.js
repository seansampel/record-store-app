import vinyl from './vinyl.png';
import './App.css';
import SearchForm from './SearchForm.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={vinyl} className="App-vinyl" alt="vinyl" />
        <p>
          Search for record stores locally!
          <SearchForm/>
        </p>
        
        <p>
            The Vinyl Eye
        </p>
      </header>
    </div>
  );
}

export default App;
