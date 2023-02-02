import ControllerFactory from "../factory/controllerFactory.js";

export class Routes {
  handler(request, response) {
    const { url, method } = request;
    const routeKey = `${url}:${method.toLowerCase()}`;

    const routes = this.createRoutes();
    const chosen = routes[routeKey] || routes.default;

    return chosen(request, response);
  }

  createRoutes() {
    const youtubeController = ControllerFactory.getYoutubeInstance()
    const spotifyController = ControllerFactory.getSpotifyInstance()
    return {
      default: (request, response) => {
        response.writeHeader(200, { "Content-Type": "text/html" });
        response.write("Hey there, try /youtube or /spotify to see my playlists");
        return response.end();
      },
      "/youtube:get": youtubeController.handle.bind(youtubeController),
      "/spotify:get": spotifyController.handle.bind(spotifyController),
    };
  }
}
