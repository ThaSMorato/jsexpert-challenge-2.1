import PlaylistController from "../controller/playlistController";
import SpotifyRepository from "../modules/spotify/repositories/spotifyRepository";
import YoutubeRepository from "../modules/youtube/repositories/youtubeRepository";
import PlaylistUseCase from "../useCase/playlistUseCase";
import api from "../util/api";

class ControllerFactory {
  static getSpotifyInstance() {
    const spotifyRepository = new SpotifyRepository({ api });
    const useCase = new PlaylistUseCase({ repository: spotifyRepository })
    return new PlaylistController({ useCase })
  }

  static getYoutubeInstance() {
    const youtubeRepository = new YoutubeRepository({ api });
    const useCase = new PlaylistUseCase({ repository: youtubeRepository })
    return new PlaylistController({ useCase })
  }
}

export default ControllerFactory;
