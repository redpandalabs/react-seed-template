import reducers from "./reducers"
import { createStore, applyMiddleware, compose } from "redux"
import createLogger from "redux-logger"
import { routerMiddleware } from "react-router-redux"
import transition from "./middlewares/transition"
import thunk from "redux-thunk"

export function configureStore(initialState, history) {
    const middlewares = [
        thunk,
        transition,
        routerMiddleware(history)
    ]
    middlewares.push(createLogger())
    return createStore(
        reducers,
        initialState,
        compose(
            applyMiddleware.apply(null, middlewares),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    )
}
