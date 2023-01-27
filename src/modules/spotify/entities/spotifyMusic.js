import Music from "../../../interface/music.js"

export default class SpotifyMusic extends Music {
    constructor({...musicProps}) {
        super((musicProps));
    }

    toString() {
        return `${this.music_name} - ${this.album_name} - ${this.artist_name}`
    }

    valueOf() {
        return this.duration;
    }
}