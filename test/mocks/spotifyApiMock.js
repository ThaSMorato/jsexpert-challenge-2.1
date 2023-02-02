import { jest } from "@jest/globals";
import SpotifyMusicDTO from "../../src/modules/spotify/dto/spotifyMusicDTO";


export const spotifyApiMock = {
    get: jest.fn()
}

export const mock = [
    {
        track: {
            artists: [{
                name: "a"
            }],
            album: { name: "aa" },
            name: "aaa",
            duration_ms: 156156,
        }
    },
    {
        track: {
            artists: [{
                name: "b"
            }],
            album: { name: "bb" },
            name: "bbb",
            duration_ms: 156156,
        }
    },
    {
        track: {
            artists: [{
                name: "c"
            }],
            album: { name: "cc" },
            name: "ccc",
            duration_ms: 156156,
        }
    },
]

spotifyApiMock.get.mockResolvedValue(mock);

export const transformedMusic = new SpotifyMusicDTO(mock[0]);
