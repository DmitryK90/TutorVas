import './App.css';
import Likes from './components/Likes/Likes'

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing" />
            <Likes likes='311' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
