import React from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import ReactDOM from "react-dom"
import { configureStore } from "./store"
import { Provider } from "react-redux"
import { syncHistoryWithStore } from "react-router-redux"
import Main from "./components/Main"
import Home from "./components/Home"
import NoMatch from "./components/NoMatch"
import AboutUs from "./components/AboutUs"

document.addEventListener("DOMContentLoaded", () => {

    const initialState = {
        actionWithAPICall: {},
        actionWithoutAPICall: {}
    }
    const store = configureStore(initialState, browserHistory)
    const history = syncHistoryWithStore(browserHistory, store)

    const appContainer = document.getElementById("app-container")

    ReactDOM.render(
        (<Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Main}>
                    <IndexRoute component={Home}/>
                    <Route path="/aboutus" component={AboutUs}/>
                </Route>
                <Route path="*" component={NoMatch}/>
            </Router>
        </Provider>),
        appContainer
    )
})
