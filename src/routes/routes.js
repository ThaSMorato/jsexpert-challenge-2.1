import ControllerFactory from "../factory/controllerFactory";

export class Routes {
  handler(request, response) {
    const { url, method } = request;
    const routeKey = `${url}:${method.toLowerCase()}`;

    const routes = this.createRoutes();
    const chosen = routes[routeKey] || routes.default;

    return chosen(request, response);
  }

  createRoutes() {
    return {
      default: (request, response) => {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write("Hey there, try /youtube or /spotify to see my playlists");
        return response.end();
      },
      "/youtube:get": ControllerFactory.getYoutubeInstance().handle,
      "/spotify:get": ControllerFactory.getSpotifyInstance().handle,
    };
  }
}
