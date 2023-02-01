class PlaylistController {
  constructor({ useCase }) {
    this.useCase = useCase;
  }

  async handle(request, response) {
    const musics = await this.useCase.perform();

    response.writeHeader(200, { "Content-Type": "application/json" });

    response.write(JSON.stringify(musics));

    return response.end();
  }
}

export default PlaylistController;
