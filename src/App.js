import './App.css';
import {BrowserRouter, Link} from 'react-router-dom';
import TextForm from './components/TextForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <button><Link to="/">Home</Link></button>
      </BrowserRouter>
      <TextForm heading="Enter Text to Analyze"/>
    </div>
  );
}

export default App;
