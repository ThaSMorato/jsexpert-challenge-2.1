import App from "./app.js";

const DEFAULT_PORT = 3000;

const app = new App();
app.createServer(DEFAULT_PORT);