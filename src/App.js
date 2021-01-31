import vinyl from './vinyl.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={vinyl} className="App-vinyl" alt="vinyl" />
        <p>
          Search for record stores locally!
        </p>
        <p>
            The Vinyl Eye
        </p>
      </header>
    </div>
  );
}

export default App;
