import './App.css';
import Navbar from './components/navbar/navbar';
import Main from './components/main/main';
import Features from './components/features/features'
import Cameras from './components/cameras/cameras'
import Cardlist from './components/cardlist/cardlist'
import Buynow from './components/Buynow/buynow'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Features />
      <Cameras />
      <Cardlist />
      <Buynow />
      <Footer />
    </div>
  );
}

export default App;
