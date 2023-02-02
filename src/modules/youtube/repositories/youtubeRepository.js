import YoutubeMusicDTO from "../dto/youtubeMusicDTO.js";
import YoutubeMusic from "../entities/youtubeMusic.js";

export default class YoutubeRepository {
    constructor({ api }) {
        this.api = api;
    }

    async getAllMusics() {
        const allMusics = await this.api.get('youtube');

        return allMusics
            .map(this.dataTransform)
            .map(music => new YoutubeMusic(music));
    }

    dataTransform = (raw_music) => new YoutubeMusicDTO(raw_music);


}
