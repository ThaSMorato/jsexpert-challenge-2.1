import { beforeAll, describe, expect, it } from '@jest/globals'
import SpotifyMusic from "../../../../../src/modules/spotify/entities/spotifyMusic";
import { transformedMusic } from '../../../../mocks/spotifyApiMock';
import Music from '../../../../../src/interface/music';

describe("#SpotifyMusic", () => {
    let spotifyMusic;

    beforeAll(() => {
        spotifyMusic = new SpotifyMusic(transformedMusic);
    })

    describe("Prototype", () => {
        it("should be instance of Music", () =>{
            expect(spotifyMusic.__proto__).toBeInstanceOf(Music)
        });
    });

    describe("Type assertion", () => {
        describe("toString", () => {
            it("should return the music name - album name - artist name", () => {
                const musicAsString = `${spotifyMusic}`;

                expect(musicAsString).toBe(`${spotifyMusic.music_name} - ${spotifyMusic.album_name} - ${spotifyMusic.artist_name}`)
            })
        });

        describe("valueOf", () => {
            it("should return the music duration in ms", () => {
                const musicAsNumber = +spotifyMusic;

                expect(musicAsNumber).toBe(spotifyMusic.duration);
            })
        })
    })
})

