import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'
import About from './About'
import NotFound from './NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Home />  
            </Route>
            <Route path="/about">
              <About />  
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </header>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
