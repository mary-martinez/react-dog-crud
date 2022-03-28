import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Header from './Components/Header/Header';
import DogDetailView from './Views/DogDetails/DogDetailView';

function App() {
  return (
    <BrowserRouter >
      <Header />
      <Switch>
        <div className="App">
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/dogs/:id'>
            <DogDetailView />
          </Route>
        </div>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
