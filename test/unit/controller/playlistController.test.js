import { describe, expect, it, jest } from '@jest/globals'
import PlaylistController from '../../../src/controller/playlistController'

const response = {
  writeHeader: jest.fn(),
  write: jest.fn(),
  end: jest.fn(),
}

const useCase = {
  perform: jest.fn(),
}

describe("#PlaylistController", () => {
  describe(".handle", () => {
    it("should add the object to response and end the request", async () => {
      const music = { a: "a test" };

      useCase.perform.mockResolvedValue(music);

      const controller = new PlaylistController({ useCase });

      await controller.handle({}, response);

      expect(response.writeHeader).toBeCalled()
      expect(response.write).toBeCalledWith(JSON.stringify(music))
      expect(response.end).toBeCalled()
      expect(useCase.perform).toBeCalled()
    })
  })
})
