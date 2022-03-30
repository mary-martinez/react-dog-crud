import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Header from './Components/Header/Header';
import DogDetailView from './Views/DogDetails/DogDetailView';
import NewDog from './Views/Admin/NewDog';
import EditDog from './Views/Edit/EditDog';

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/dogs/:id/edit'>
            <EditDog />
          </Route>
          <Route exact path='/dogs/:id'>
            <DogDetailView />
          </Route>
          <Route path='/admin'>
            <NewDog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
