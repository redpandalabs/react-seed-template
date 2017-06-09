import { InvalidAuthDetails, APIError } from "../errors"
import { fetchActionCreator } from "redux-fetch-helpers"

const BASE_URL = `localhost:3000`
const API_PATHS = {
    login : "/authenticator/signIn",
}

const fetchData = (action, path, requestMethod, requestBody, authToken = null) => {
    return fetchActionCreator({
        url: `${BASE_URL}${path}`,
        fetchOptions: Object.assign({
            method: requestMethod,
            headers: new Headers(Object.assign({
                "Accept": "application/json",
                "Content-Type": "application/json",
            }, authToken ? {"auth-token": authToken} : {})),
        }, requestMethod === "POST" ? {
            body: JSON.stringify(requestBody)
        } : {}),
        actionType: action,
        responseConfig: {
            200: (resp => JSON.parse(resp)),
            400: (payload => new InvalidAuthDetails(payload)),
            other: (payload => new APIError(payload)),
        }
    })
}

const api = {
    loginUser : (body, action) => fetchData(action, API_PATHS.login, "POST", body),
}

export default api
