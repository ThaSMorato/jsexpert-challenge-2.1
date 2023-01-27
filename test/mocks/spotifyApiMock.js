import { jest } from "@jest/globals";


export const spotifyApiMock = {
    get: jest.fn()
}

export const mock = [
    {
        track:{
            artists: {
                name: "a"
            }
        }
    },
    {
        track:{
            artists: {
                name: "b"
            }
        }
    },
    {
        track:{
            artists: {
                name: "c"
            }
        }
    },
]

spotifyApiMock.get.mockResolvedValue(mock);