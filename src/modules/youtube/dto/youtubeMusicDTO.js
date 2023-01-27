export default class YoutubeMusicDTO {
    constructor({ track }) {
        this.artist_name = track.artists.artist_name;
    }
}