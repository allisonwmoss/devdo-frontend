import './App.css';
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import IdeaList from './components/IdeaList';
import IdeaDetail from './components/IdeaDetail';
import IdeaCreate from './components/IdeaCreate';
import Navig from './components/Navig';
function App() {
  return (
    <div className="container">
      <Navig />
      <Switch>
        <Route exact path="/ideas" component={IdeaList}></Route>
        <Route exact path="/ideas/:id" component={IdeaDetail}></Route>
        <Route exact path="/ideas/new" component={IdeaCreate}></Route>
      </Switch>
    </div>
  )
}
export default App;