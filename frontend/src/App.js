import './App.css';
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import IdeaList from './components/IdeaList';
import IdeaDetail from './components/IdeaDetail';
import IdeaCreate from './components/IdeaCreate';
import Navig from './components/Navig';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';

function App() {
  return (
    <div className="container">
      <Navig />
      <Switch>
        <Route exact path="/">
          <Redirect to="/ideas"></Redirect>
        </Route>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/logout' component={Logout} />
        <Route exact path="/ideas" component={IdeaList}></Route>
        <Route exact path="/ideas/:id" component={IdeaDetail}></Route>
        <Route exact path="/ideas/new" component={IdeaCreate}></Route>
      </Switch>
    </div>
  )
}
export default App;