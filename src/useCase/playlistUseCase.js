import Playlist from "../interface/playlist.js";

class PlaylistUseCase {
  constructor({ repository }) {
    this.repository = repository;
  }

  async perform() {
    const musics = await this.repository.getAllMusics();

    const playlist = new Playlist({ musics });

    return playlist.toResponse();
  }
}

export default PlaylistUseCase;
