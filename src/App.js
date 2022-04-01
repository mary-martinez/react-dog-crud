import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Views/Home/Home';
import Header from './Components/Header/Header';
import DogDetailView from './Views/DogDetails/DogDetailView';
import NewDog from './Views/Admin/NewDog';
import EditDog from './Views/Edit/EditDog';
import { useState } from 'react';
import { getUser } from './services/users';
import Auth from './Views/Auth/Auth';
import { Redirect } from 'react-router-dom';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  return (
    <div className="App">
      <BrowserRouter >
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/auth'>
            <Auth setCurrentUser={setCurrentUser} />
          </Route>
          <Route exact path='/dogs/:id/edit'>
            {currentUser ? <EditDog /> : <Redirect to='/auth' />}
          </Route>
          <Route exact path='/dogs/:id'>
            <DogDetailView currentUser={currentUser} />
          </Route>
          <Route path='/admin'>
            {currentUser ? <NewDog /> : <Redirect to='/auth' />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
