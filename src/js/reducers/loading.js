import { handleActions } from "redux-actions"

const next = (state, action) => action.meta.sequence === "BEGIN" ? true : false
const error = (state, action) => false
const action = {next, throw: error}

export default handleActions({
    "LOGIN": action,
    "SAVE_SURVEY_DETAILS": action,
    "ADD_SURVEY_QUESTIONS": action,
    "FETCH_PENDING_SURVEY": action,
    "SAVE_TARGET_PROFILE": action,
    "UPDATE_SELECTED_PROFILE": action,
    "SAVE_SURVEY_OPTIONS": action,
    "PUBLISH_SURVEY": action,
    "NEW_TARGET_PROFILE": action,
    "PUBLISHED_SURVEY_DETAILS": action,
    "FETCH_AUDIENCES": action,
    "FETCH_MEDIA": action,
    "CREATE_AUDIENCES": action,
    "CREATE_MEDIA": action,
    "FETCH_REGIONS": action,
    "SAVE_REGIONS": action,
    "GET_SETTINGS": action,
    "SAVE_SETTINGS": action
}, false)
