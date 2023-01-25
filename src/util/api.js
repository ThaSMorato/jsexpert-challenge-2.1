export default class Api {
    static async get(param) {
        const jsonResponse = await fetch(`url/${param}`);
        return await jsonResponse.json();
    }
}