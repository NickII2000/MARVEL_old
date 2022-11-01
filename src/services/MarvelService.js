
class MarvelService {
    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource('https://gateway.marvel.com:443/v1/public/characters?apikey=69d8fb97dce7de89ea39e572903300ab');
    }

}

export default MarvelService;