import { beforeAll, describe, expect, it } from '@jest/globals'
import { transformedMusic } from '../../../../mocks/youtubeApiMock';
import Music from '../../../../../src/interface/music';
import YoutubeMusic from '../../../../../src/modules/youtube/entities/youtubeMusic';

describe("#YoutubeMusic", () => {
    let youtubeMusic;

    beforeAll(() => {
        youtubeMusic = new YoutubeMusic(transformedMusic);
    })

    describe("Prototype", () => {
        it("should be instance of Music", () =>{
            expect(youtubeMusic.__proto__).toBeInstanceOf(Music)
        });
    });

    describe("Type assertion", () => {
        describe("toString", () => {
            it("should return the music name - album name - artist name", () => {
                const musicAsString = `${youtubeMusic}`;

                expect(musicAsString).toBe(`${youtubeMusic.music_name} - ${youtubeMusic.album_name} - ${youtubeMusic.artist_name}`)
            })
        });

        describe("valueOf", () => {
            it("should return the music duration in ms", () => {
                const musicAsNumber = +youtubeMusic;

                expect(musicAsNumber).toBe(youtubeMusic.duration);
            })
        })
    })
})

