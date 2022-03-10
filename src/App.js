import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Switch>
            <Route path="/">
              <Home />  
            </Route>
          </Switch>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
