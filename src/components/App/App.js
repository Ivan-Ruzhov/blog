import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Authorization } from '../Authorization'
import { Profile } from '../Profile'
import { Registration } from '../Registration'
import { createArticle } from '../Create-article'
import { Header } from '../Header'
// import { Article } from '../Article'
import { ListArticle } from '../List-article'

import classes from './App.module.scss'
import '../../style/style.scss'
const App = () => {
  console.log(classes)
  return (
    <>
      <Router>
        <Header />
        <div>Главная</div>
        <Route path="/" component={ListArticle} exact />
        <Route path="/authorization" component={Authorization} />
        <Route path="/profile" component={Profile} />
        <Route path="/registration" component={Registration} />
        <Route path="/create-article" component={createArticle} />
      </Router>
    </>
  )
}

export { App }
