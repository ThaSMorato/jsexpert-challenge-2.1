import { describe, expect, it, jest, beforeEach } from '@jest/globals'
import { Routes } from '../../../src/routes/routes';

describe("#Routes", () => {
  let routes;

  beforeEach(() => {
    routes = new Routes();
  })

  describe(".createRoutes", () => {
    it('should return an object with the keys as route/verb', () => {
      const response = routes.createRoutes();

      expect(Reflect.ownKeys(response)).toEqual(['default', '/youtube:get', '/spotify:get'])
    })
  })

  describe('.handler', () => {
    it('should call the correct route', () => {

      const expected_routes = {
        default: jest.fn(),
        '/hi:get': jest.fn(),
      }

      jest.spyOn(Routes.prototype, Routes.prototype.createRoutes.name).mockReturnValue(expected_routes)

      routes.handler({ url: '/hi', method: 'GET' }, {});

      expect(expected_routes['/hi:get']).toBeCalled()

      routes.handler({ url: '/other_route', method: 'GET' }, {});

      expect(expected_routes.default).toBeCalled()

    })
  })
})
