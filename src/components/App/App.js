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

import '../../style/style.scss'

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Route path="/" component={ListArticle} exact />
        <Route path="/articles" component={ListArticle} exact />
        <Route
          path="/articles/:slug/edit"
          exact
          render={() => {
            return <EditArticle />
          }}
        />
        <Route
          path="/articles/:slug"
          exact
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
