import { handleActions } from "redux-actions"

const initialState = {

}

export default handleActions({
    "ACTION_WITH_API_CALL": {
        next: (state, action) => {
            if(action.meta.sequence === "COMPLETE") {
                return action.payload
            }
            return state
        },
        throw: (state, action) => ""
    }
}, initialState)
