import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import IdeaList from './components/IdeaList';
import IdeaDetail from './components/IdeaDetail';

function App() {
  return (
    <div className="container">
      <h1>working</h1>
      <Switch>
        <Route exact path="/ideas" component={IdeaList}></Route>
        <Route exact path="/ideas/:id" component={IdeaDetail}></Route>
      </Switch>
    </div>
  )
}
export default App;