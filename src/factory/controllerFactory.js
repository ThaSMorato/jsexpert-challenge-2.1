import PlaylistController from "../controller/playlistController.js";
import SpotifyRepository from "../modules/spotify/repositories/spotifyRepository.js";
import YoutubeRepository from "../modules/youtube/repositories/youtubeRepository.js";
import PlaylistUseCase from "../useCase/playlistUseCase.js";
import api from "../util/api.js";

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
