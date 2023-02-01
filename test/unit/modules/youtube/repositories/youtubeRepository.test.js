import { beforeAll, describe, expect, it, jest } from '@jest/globals'
import YoutubeRepository from '../../../../../src/modules/youtube/repositories/youtubeRepository';
import { youtubeApiMock, mock } from '../../../../mocks/youtubeApiMock';
import YoutubeMusic from '../../../../../src/modules/youtube/entities/youtubeMusic';
import YoutubeMusicDTO from '../../../../../src/modules/youtube/dto/youtubeMusicDTO';

describe('#YoutubeRepository', () => {
    let repository;

    beforeAll(() => {
        repository = new YoutubeRepository({api: youtubeApiMock})
    })

    describe(".getAllMusics", () => {
        it('should call get on api with the string youtube as param',async  () => {
            await repository.getAllMusics();

            expect(youtubeApiMock.get).toBeCalledTimes(1);
            expect(youtubeApiMock.get).toBeCalledWith('youtube');
        });

        it('should return an array of SpotifyMusic from the api', async () => {

            const result = await repository.getAllMusics();

            expect(result[0]).toBeInstanceOf(YoutubeMusic);
        });
    });

    describe(".dataTransform", () => {
        it("should return an instance of YoutubeMusicDTO", () => {
            const result = repository.dataTransform(mock[0]);

            expect(result).toBeInstanceOf(YoutubeMusicDTO);
        })
    })
});