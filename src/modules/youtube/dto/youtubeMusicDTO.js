export default class YoutubeMusicDTO {
    constructor({ track }) {
        this.artist_name = track.artists[0].artist_name;
        this.album_name = track.album.name;
        this.music_name = track.name;
        this.duration = track.time_ms;
    }
}
