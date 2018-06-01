import React from 'react'
import ReactDOM from 'react-dom'
import Wizard from './containers/Wizard'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <Wizard />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
