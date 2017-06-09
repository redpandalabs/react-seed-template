import { push } from "react-router-redux"

export default () => (next) => (action) => {
    const result = next(action)
    if ("meta" in action && action.meta !== undefined && "transition" in action.meta && action.meta.transition !== undefined) {
        const {meta: {transition}} = action
        next(push(transition.path))
    }
    return result
}
