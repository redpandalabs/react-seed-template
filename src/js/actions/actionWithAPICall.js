import api from "../utils/api"

export default function authenticateLogin(details) {
    return api.loginUser(details, "ACTION_WITH_API_CALL")
}
