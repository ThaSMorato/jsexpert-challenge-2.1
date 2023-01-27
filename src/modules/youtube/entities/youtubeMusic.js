import Music from "../../../interface/music.js";

export default class YoutubeMusic extends Music {
    constructor({...musicProps}) {
        super((musicProps));
    }

    [Symbol.toPrimitive](coercionType){
        return coercionType === "string"
          ? `${this.music_name} - ${this.album_name} - ${this.artist_name}`
          : this.duration
    }
}