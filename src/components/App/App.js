import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Authorization } from '../Authorization'
import { Profile } from '../Profile'
import { Registration } from '../Registration'
import { CreateArticle } from '../Create-article'
import { Header } from '../Header'
import { ArticleDetails } from '../Article-details'
import { ListArticle } from '../List-article'
import { EditArticle } from '../Edit-article/'
import { Error } from '../Error'
import {
  root,
  articles,
  articleDetails,
  authorization,
  profile,
  editArticle,
  newArticle,
  registration,
} from '../Path/Path'

import '../../style/style.scss'

const App = () => {
  const { err } = useSelector((state) => state.articlesReducer)
  return (
    <>
      <Router>
        <Header />
        {err ? <Error /> : null}
        <Route path={root} component={ListArticle} exact />
        <Route path={articles} component={ListArticle} exact />
        <Route
          path={editArticle}
          exact
          render={() => {
            return <EditArticle />
          }}
        />
        <Route
          path={articleDetails}
          exact
          render={({ match }) => {
            return <ArticleDetails params={match} />
          }}
        />
        <Route path={authorization} component={Authorization} />
        <Route path={profile} component={Profile} />
        <Route path={registration} component={Registration} />
        <Route path={newArticle} component={CreateArticle} />
      </Router>
    </>
  )
}

export { App }
