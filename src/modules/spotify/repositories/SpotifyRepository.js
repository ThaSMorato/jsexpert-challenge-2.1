import SpotifyMusicDTO from "../dto/spotifyMusicDTO";
import SpotifyMusic from "../entities/spotifyMusic";

export default class SpotifyRepository {
    constructor({ api }) { 
        this.api = api;
    }

    async getAllMusics() {
        const allMusics = await this.api.get('spotify');

        return allMusics
        .map(raw_music => new SpotifyMusicDTO(raw_music))
        .map(music => new SpotifyMusic(music));
    }
}