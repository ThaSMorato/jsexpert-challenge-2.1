import { beforeAll, describe, expect, it, jest } from '@jest/globals'
import SpotifyRepository from '../../../../src/modules/spotify/repositories/SpotifyRepository';
import SpotifyMusic from '../../../../src/modules/spotify/entities/spotifyMusic';
import { spotifyApiMock, mock } from '../../../mocks/spotifyApiMock';
import SpotifyMusicDTO from '../../../../src/modules/spotify/dto/spotifyMusicDTO';

describe('#SpotifyRepository', () => {
    let repository;

    beforeAll(() => {
        repository = new SpotifyRepository({api: spotifyApiMock})
    })

    describe(".getAllMusics", () => {
        it('should call get on api with the string spotify as param',async  () => {
            await repository.getAllMusics();

            expect(spotifyApiMock.get).toBeCalledTimes(1);
            expect(spotifyApiMock.get).toBeCalledWith('spotify');
        });

        it('should return an array of SpotifyMusic from the api', async () => {

            const result = await repository.getAllMusics();

            const expected = mock.map(music => new SpotifyMusic(music))

            expect(result.join()).toBe(expected.join());
            expect(result[0]).toBeInstanceOf(SpotifyMusic);
        });
    });

    describe(".dataTransform", () => {
        it("should return an instance of SpotifyMusicDTO", () => {
            const result = repository.dataTransform(mock[0]);

            expect(result).toBeInstanceOf(SpotifyMusicDTO);
        })
    })
});