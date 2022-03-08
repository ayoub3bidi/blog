import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Home />
      </header>
      <Footer />
    </div>
  );
}

export default App;
