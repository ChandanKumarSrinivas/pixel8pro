import './App.css';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Features from './components/features/features'
import Cameras from './components/cameras/cameras'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Features />
      <Cameras />
    </div>
  );
}

export default App;
