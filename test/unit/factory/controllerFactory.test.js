import { describe, expect, it } from '@jest/globals'
import PlaylistController from '../../../src/controller/playlistController'
import ControllerFactory from '../../../src/factory/controllerFactory'
import SpotifyRepository from '../../../src/modules/spotify/repositories/spotifyRepository'
import YoutubeRepository from '../../../src/modules/youtube/repositories/youtubeRepository'
import PlaylistUseCase from '../../../src/useCase/playlistUseCase'

describe('#Factory', () => {
  describe('.getInstance', () => {
    it('should return an instance of the use case', () => {
      const youtubeInstance = ControllerFactory.getYoutubeInstance();
      const spotifyInstance = ControllerFactory.getSpotifyInstance();

      expect(youtubeInstance).toBeInstanceOf(PlaylistController);
      expect(spotifyInstance).toBeInstanceOf(PlaylistController);
      expect(youtubeInstance.useCase).toBeInstanceOf(PlaylistUseCase);
      expect(spotifyInstance.useCase).toBeInstanceOf(PlaylistUseCase);
      expect(spotifyInstance.useCase.repository).toBeInstanceOf(SpotifyRepository);
      expect(youtubeInstance.useCase.repository).toBeInstanceOf(YoutubeRepository);
    })
  })
})
