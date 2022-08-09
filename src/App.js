import './App.css';
import Video from './Video'

function App() {
  return (
    <div className="App">
      <h1>Hello clever programmer 🚀, let's build TikTok clone</h1>

      <div className="app__videos">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
