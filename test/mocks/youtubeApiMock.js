import { jest } from "@jest/globals";
import YoutubeMusicDTO from "../../src/modules/youtube/dto/youtubeMusicDTO";


export const youtubeApiMock = {
    get: jest.fn()
}

export const mock = [
    {
        track: {
            artists: [{
                artist_name: "a"
            }],
            album: { name: "aa" },
            name: "aaa",
            time_ms: 545488,
        }
    },
    {
        track: {
            artists: [{
                artist_name: "b"
            }],
            album: { name: "bb" },
            name: "bbb",
            time_ms: 545488,
        }
    },
    {
        track: {
            artists: [{
                artist_name: "c"
            }],
            album: { name: "cc" },
            name: "ccc",
            time_ms: 545488,
        }
    },
]

youtubeApiMock.get.mockResolvedValue(mock);

export const transformedMusic = new YoutubeMusicDTO(mock[0]);
