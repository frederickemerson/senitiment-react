import logo from './happy.png';
import './App.css';
import Senti from './sen.js'
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sentiment Analysis Results
        </p>
        <Senti
        text={window.prompt("Enter text to be analyzed")}
        />
      </header>
    </div>
  );
}

export default App;
