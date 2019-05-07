import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Router, Switch, Route } from 'react-router-dom' //*これは公式と違う以下のurl参照. まぁ、先人の失敗と思いスルーしても問題なし。
import history from '../history' //*これは公式と違う https://stackoverflow.com/questions/42701129/how-to-push-to-history-in-react-router-v4
import TopPage from '../containers/TopPage'
import PostNew from '../containers/PostNew'
import PostShow from '../containers/PostShow'
import PostEdit from '../containers/PostEdit'
import Navbar from './Navbar'

// https://stackoverflow.com/questions/50584641/invariant-violation-you-should-not-use-switch-outside-a-router
// https://reacttraining.com/react-router/web/api/Switch
// https://stackoverflow.com/questions/46621334/react-react-router-dom-two-route-conflict
const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={TopPage} />
        <Route exact path="/posts/new" component={PostNew} />
        <Route exact path="/posts/:id" component={PostShow} />
        <Route exact path="/posts/:id/edit" component={PostEdit} />
      </Switch>
    </Router>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root