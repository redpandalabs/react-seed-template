export class APIError extends Error {
    constructor(errorObj) {
        super("An error occurred communicating with the API")
        this.name = "APIError"
        this.errors = errorObj
        this.statusCode = errorObj.status
    }
}

export class NotFoundError extends APIError {
    constructor() {
        super({status: 404})
        this.name = "NotFoundError"
    }
}

export class InvalidAuthDetails extends APIError {
    constructor(errors) {
        super({status: 400})
        this.name = "InvalidAuthDetails"
        this.errors = errors
    }
}

export class ForbiddenRequest extends APIError {
    constructor(errors) {
        super({status: 401})
        this.name = "ForbiddenRequest"
        this.errors = errors
    }
}
