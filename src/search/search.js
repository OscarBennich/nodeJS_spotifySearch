import processData from './data'
const API_KEY = ''

class SearchEngine {
    execute(searchType, searchText) {
        return fetch (`https://api.spotify.com/v1/search?q=${searchText}&type=${searchType}`,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            }
        })
        .then(response => response.json())
        .then(rawSearchResults => processData(rawSearchResults))
    }
}

export default new SearchEngine()
