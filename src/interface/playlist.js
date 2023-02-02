import formatMilisseconds from "../util/timeFormat.js";

export default class Playlist {
    constructor({ musics }) {
        this.musics = musics;
    }

    toResponse() {
        const { musics, duration } = this.musics.reduce(this.musicsTransformation, {
            musics: [],
            duration: 0,
        });

        return {
            musics: musics.map((music) => ({ ...music, duration: formatMilisseconds(music.duration) })),
            duration: formatMilisseconds(duration)
        }
    }

    musicsTransformation(prev, current) {
        return {
            musics: [
                ...prev.musics,
                {
                    display: `${current}`,
                    duration: +current,
                }
            ],
            duration: prev.duration + current,
        }
    }
}
