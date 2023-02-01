import SpotifyRepository from "../modules/spotify/repositories/spotifyRepository";
import YoutubeRepository from "../modules/youtube/repositories/youtubeRepository";
import PlaylistUseCase from "../useCase/playlistUseCase";
import api from "../util/api";

class RepositoryFactory {
  static getSpotifyInstance() {
    const spotifyRepository = new SpotifyRepository({ api });
    return new PlaylistUseCase({ repository: spotifyRepository })
  }

  static getYoutubeInstance() {
    const youtubeRepository = new YoutubeRepository({ api });
    return new PlaylistUseCase({ repository: youtubeRepository })
  }
}

export default RepositoryFactory;
