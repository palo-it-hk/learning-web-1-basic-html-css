import logger from "../utils/logger"

interface RouteDefinition {
    path: string
    view: any 
}

const pathToRegex = (path:string) => {
    return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$")
}

export default class {
    routeDefinitions: Array<RouteDefinition>
    currentRoute: RouteDefinition

    constructor(routeDefinitions: Array<RouteDefinition>) {
        this.routeDefinitions = routeDefinitions
        this.currentRoute = routeDefinitions[0]
    }

    extractRequestParameters(url:string) {
        // We take the leading
        const trimmedRoute = url.slice(1)
        const uriKeys = Array.from(this.currentRoute.path.matchAll(/:(\w+)/g)).map(result => result[1]);

        return Object.fromEntries(uriKeys.map((key, i) => {
            return [key, trimmedRoute[i]];
        }))
    }

    getRoute = (url:string):RouteDefinition => {
        logger.debug(`Trying to get route for ${url}`)
        // Get the page to use or first declared page in routes
        this.currentRoute = this.routeDefinitions.find((routeDefinition:RouteDefinition) => {
            // We get the URI from the browser for parsing
            // Try and match the URI to the route using a regular expression
            return url.match(pathToRegex(routeDefinition.path))
        }) || this.routeDefinitions[0]
        logger.debug(`Matched with: ${this.currentRoute.path}`)
        return this.currentRoute
    }
}