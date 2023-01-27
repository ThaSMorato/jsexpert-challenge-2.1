export default class Api {
    static async get(param) {
        const jsonResponse = await fetch(`http://localhost:3001/${param}`);
        return await jsonResponse.json();
    }
}