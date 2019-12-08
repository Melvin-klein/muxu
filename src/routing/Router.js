class Router {
    constructor () {
        this.routes = [];
    }

    register(uri, component) {
        this.routes.push(new Route(uri, component))
    }
}
