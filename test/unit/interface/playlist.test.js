import { describe, expect, it } from '@jest/globals'
import Playlist from '../../../src/interface/playlist'
import SpotifyMusic from '../../../src/modules/spotify/entities/spotifyMusic'
import formatMilisseconds from '../../../src/util/timeFormat'
import { transformedMusic } from '../../mocks/spotifyApiMock'

describe("#Playlist", () => {
  describe(".toResponse", () => {
    it("should return the playlist already formatted", () => {

      const music = new SpotifyMusic(transformedMusic)
      const musics = [music, music];

      const playlist = new Playlist({ musics });

      const resp = playlist.toResponse();

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
