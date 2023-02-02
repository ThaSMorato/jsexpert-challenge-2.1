import { describe, it, expect, beforeAll, afterAll } from "@jest/globals";
import request from "supertest";
import App from "../../src/app.js";

const SERVER_TEST_PORT = 4000;

describe("#App", () => {
  let app = {};

  beforeAll(() => {
    const instance = new App();

    app = {
      instance,
      server: instance.createServer(SERVER_TEST_PORT),
    };
  })

  afterAll(() => {
    app.server.close();
  })

  describe("/default", () => {
    it("should request the default and return HTTP status 200", async () => {
      await request(app.server).get("/default").expect(200);
    });
    it("should request the default and return content-type html", async () => {
      await request(app.server).get("/default").expect("Content-Type", /html/);
    });
    it("should request the default and return the default text", async () => {
      const expectedText =
        "Hey there, try /youtube or /spotify to see my playlists";
      await request(app.server).get("/default").expect(expectedText).done;
    });

    describe("/spotify", () => {
      it("should return a json with  ", async () => {


        const response = await request(app.server).get("/spotify").expect(200).expect("Content-Type", /json/);

        expect(response.body).toMatchObject({
          musics: expect.arrayContaining([expect.objectContaining({
            display: expect.any(String),
            duration: expect.any(String),
          })]),
          duration: expect.any(String),
        });

      });
    });

    describe("/youtube", () => {
      it("should return a json with  ", async () => {


        const response = await request(app.server).get("/youtube").expect(200).expect("Content-Type", /json/);

        expect(response.body).toMatchObject({
          musics: expect.arrayContaining([expect.objectContaining({
            display: expect.any(String),
            duration: expect.any(String),
          })]),
          duration: expect.any(String),
        });

      });
    });
  })
});
