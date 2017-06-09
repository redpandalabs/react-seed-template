import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import token from "./token"
import screenName from "./screenName"
import newSurvey from "./newSurvey"
import targetProfiles from "./targetProfiles"
import notifications from "./notifications"
import loading from "./loading"
import surveys from "./surveys"
import surveyDetailsCsv from "./surveyDetailsCsv"
import audiences from "./audiences"
import media from "./media"
import resetPassword from "./resetPassword"
import regions from "./regions"
import settings from "./settings"
import surveyAttempts from "./surveyAttempts"

export default combineReducers({
    routing: routerReducer,
    token,
    screenName,
    newSurvey,
    targetProfiles,
    notifications,
    loading,
    surveys,
    surveyDetailsCsv,
    audiences,
    media,
    resetPassword,
    regions,
    settings,
    surveyAttempts
})
