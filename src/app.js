import http from "http";
import { Routes } from "./routes/routes.js";

export default class App {
  createServer(port) {
    const routes = new Routes();

    const app = http
      .createServer(routes.handler.bind(routes))
      .listen(port, () => console.log(`Listening on ${port}`));

    return app;
  }
}
