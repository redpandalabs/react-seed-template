import React from "react"
import { Router, Route, browserHistory } from "react-router"
import ReactDOM from "react-dom"
import { configureStore } from "./store"
import { Provider } from "react-redux"
import { syncHistoryWithStore } from "react-router-redux"
import Survey from "./components/Survey"
import Home from "./components/Home"
import NoMatch from "./components/NoMatch"

document.addEventListener("DOMContentLoaded", () => {

    const initialState = {
        token: 'somevalue'
    }
    const store = configureStore(initialState, browserHistory)
    const history = syncHistoryWithStore(browserHistory, store)

    const appContainer = document.getElementById("app-container")

    ReactDOM.render(
        (<Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Survey}>
                    <IndexRoute component={Home}/>
                </Route>
                <Route path="*" component={NoMatch}/>
            </Router>
        </Provider>),
        appContainer
    )
})
