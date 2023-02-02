export default class SpotifyMusicDTO {
    constructor({ track }) {
        this.artist_name = track.artists[0].name;
        this.album_name = track.album.name;
        this.music_name = track.name;
        this.duration = track.duration_ms;
    }
}
