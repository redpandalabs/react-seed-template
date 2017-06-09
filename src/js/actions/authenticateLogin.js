import api from "../utils/api"

export default function authenticateLogin(details) {
    return api.loginUser(details, "LOGIN")
}
