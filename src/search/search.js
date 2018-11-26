import processData from './data'
const API_KEY = 'BQAtQqELodyUuVNzwJyIAlOam6IvuHKZjIL2z2XFLe7oMOmKLk3VmYCPWMx5EsVlco8c4V6reBHtCDQPIBM7HJMrsF0xcf3ABWuBkvmjGnUcu7wsI6nnNTZ--wQm3uC7vGkvP8qmyOK3AX_6CxHZ'

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