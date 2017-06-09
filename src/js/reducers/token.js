import { handleActions } from "redux-actions"

export default handleActions({
    "LOGIN": {
        next: (state = null, action) => {
            if(action.meta.sequence === "COMPLETE" && action.payload) {
                window.sessionStorage.token = action.payload.authToken
                return action.payload.authToken
            }
            return state
        },
        throw: (state, action) => ""
    },
    "LOGOUT": {
        next: (state, action) => {
            delete window.sessionStorage.token
            return null
        }
    }
}, null)
