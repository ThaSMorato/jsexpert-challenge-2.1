import http  from "http";

const DEFAULT_HEADERS = {
  "Content-Type": "application/json",
};

export default class App {

  createRoutes() {
    return {
      default: (request, response) => {
        // TODO
        return response.end();
      },
      "/youtube:get": async (request, response) => {
        //TODO
        return response.end();
      },
      "/spotify:get": async (request, response) => {
        //TODO
        return response.end();
      },
    };
  }

  handler(request, response) {
    const { url, method } = request;
    const routeKey = `${url}:${method.toLowerCase()}`;

    const routes = this.createRoutes();
    const chosen = routes[routeKey] || routes.default;

    response.writeHeader(200, DEFAULT_HEADERS);

    return chosen(request, response);
  }

  createServer(port) {
    const app = http
      .createServer(this.handler.bind(this))
      .listen(port, () => console.log(`Listening on ${port}`));

    return app;
  }
}