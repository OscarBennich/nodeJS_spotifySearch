import $ from 'jquery'
import SearchEngine from './search/search'
import _ from 'lodash'

const IMAGE_NA_URL = 'http://www.hellcat.org/attachments/image-not-available-jpg.289129/'

function doSearch() {
    const searchType = $('#search-type').val()
    const searchText = $('#search-text').val()
    console.log(searchType + " " + searchText)

    if (!searchText) {
        return
    }

    SearchEngine.execute(searchType, searchText)
        .then(searchResult => {
            $('.search-result').remove()

            searchResult.forEach(
                ({ name, uri, images }) => {
                    const htmlString = `
                        <div class="search-result">
                            <div class="search-result-info">
                                <p>${name}</p>
                                <a href="${uri}">Open in Spotify</a>
                            </div>
                            <img src="${images.length > 0 ? images[0] : IMAGE_NA_URL}">
                        </div> 
                        `

                    $('#search-results').append(htmlString);
                }
            )

            console.log(searchResult)
        })
        .then(searchError => {
            console.log(searchError)
        })
}

doSearch = _.debounce(doSearch, 400)

$('#search-text').on(
    'keyup',
    event => {
        doSearch()
    }
)