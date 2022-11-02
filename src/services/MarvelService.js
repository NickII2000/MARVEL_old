
class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public';


    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}/characters?limit=9&offset=210&apikey=69d8fb97dce7de89ea39e572903300ab`);
    }

    getCharacter = (id) => {
        return this.getResource(`${this._apiBase}/characters/${id}?apikey=69d8fb97dce7de89ea39e572903300ab`);
    }
}

export default MarvelService;