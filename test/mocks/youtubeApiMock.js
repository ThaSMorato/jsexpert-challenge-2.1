import { jest } from "@jest/globals";


export const youtubeApiMock = {
    get: jest.fn()
}

export const mock = [
    {
        track:{
            artists: {
                artist_name: "a"
            }
        }
    },
    {
        track:{
            artists: {
                artist_name: "b"
            }
        }
    },
    {
        track:{
            artists: {
                artist_name: "c"
            }
        }
    },
]

youtubeApiMock.get.mockResolvedValue(mock);