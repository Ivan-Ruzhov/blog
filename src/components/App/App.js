import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Authorization } from '../Authorization'
import { Profile } from '../Profile'
import { Registration } from '../Registration'
import { CreateArticle } from '../Create-article'
import { Header } from '../Header'
import { ArticleDetails } from '../Article-details'
import { ListArticle } from '../List-article'
import { EditArticle } from '../Edit-article/'

import classes from './App.module.scss'
import '../../style/style.scss'
const App = () => {
  console.log(classes)
  return (
    <>
      <Router>
        <Header />
        <Route path="/" component={ListArticle} exact />
        <Route path="/articles" component={ListArticle} exact />
        <Route
          path="/articles/:slug/edit"
          render={({ match }) => {
            return <EditArticle params={match} />
          }}
        />
        <Route
          path="/articles/:slug"
          render={({ match }) => {
            return <ArticleDetails params={match} />
          }}
        />
        <Route path="/sign-in" component={Authorization} />
        <Route path="/profile" component={Profile} />
        <Route path="/sign-up" component={Registration} />
        <Route path="/new-article" component={CreateArticle} />
      </Router>
    </>
  )
}

export { App }
