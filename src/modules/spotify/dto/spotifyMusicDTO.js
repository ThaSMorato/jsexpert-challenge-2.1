export default class SpotifyMusicDTO {
    constructor({ track }) {
        this.artist_name = track.artists.name;
    }
}