export default class Playlist {
    constructor({ musics }) {
        this.musics = musics;
    }

    showMusics() {
        let miliseconds = 0;

        this.musics.forEach((music) => {
            console.log(`${music}`);
            miliseconds += music;
        })
        console.log(miliseconds);
    }
}