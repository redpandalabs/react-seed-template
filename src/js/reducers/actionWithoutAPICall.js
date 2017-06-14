import { handleActions } from "redux-actions"

const initialState = {

}

export default handleActions({
    "ACTION_WITHOUT_API_CALL": {
        next: (state, action) => {
            return state
        }
    }
}, initialState)
