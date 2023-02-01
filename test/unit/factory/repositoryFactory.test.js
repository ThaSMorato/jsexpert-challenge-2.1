import { describe, expect, it } from '@jest/globals'
import RepositoryFactory from '../../../src/factory/repositoryFactory'
import SpotifyRepository from '../../../src/modules/spotify/repositories/spotifyRepository'
import YoutubeRepository from '../../../src/modules/youtube/repositories/youtubeRepository'
import PlaylistUseCase from '../../../src/useCase/playlistUseCase'

describe('#Factory', () => {
  describe('.getInstance', () => {
    it('should return an instance of the use case', () => {
      const youtubeInstance = RepositoryFactory.getYoutubeInstance();
      const spotifyInstance = RepositoryFactory.getSpotifyInstance();

      expect(youtubeInstance).toBeInstanceOf(PlaylistUseCase);
      expect(spotifyInstance).toBeInstanceOf(PlaylistUseCase);
      expect(spotifyInstance.repository).toBeInstanceOf(SpotifyRepository);
      expect(youtubeInstance.repository).toBeInstanceOf(YoutubeRepository);
    })
  })
})
