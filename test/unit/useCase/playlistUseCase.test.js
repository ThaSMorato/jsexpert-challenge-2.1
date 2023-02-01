import { describe, expect, it, jest } from '@jest/globals'
import SpotifyMusic from '../../../src/modules/spotify/entities/spotifyMusic'
import PlaylistUseCase from '../../../src/useCase/playlistUseCase'
import formatMilisseconds from '../../../src/util/timeFormat'
import { transformedMusic } from '../../mocks/spotifyApiMock'

const repository = {
  getAllMusics: jest.fn(),
}

describe("#PlaylistUseCase", () => {
  describe(".perform", () => {
    it("should return a object to the user", async () => {
      const music = new SpotifyMusic(transformedMusic)
      const musics = [music, music];

      repository.getAllMusics.mockResolvedValue(musics)

      const playlist = new PlaylistUseCase({ repository });

      const resp = await playlist.perform();

      const expected = {
        musics: [
          { display: `${music}`, duration: formatMilisseconds(+music) },
          { display: `${music}`, duration: formatMilisseconds(+music) }
        ],
        duration: formatMilisseconds(music + music)
      }

      expect(resp).toEqual(expected);
    })
  })
})
