import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <div className="App">
          <Route path='/'>
            <Home />
          </Route>
        </div>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
