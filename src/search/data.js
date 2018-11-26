export default data => {
    const items = data.artists ? data.artists.items : data.tracks.items; 
    return items.map(
        ({name, uri, images, album}) => ({
            name, 
            uri, 
            images : images
                ? images.map(({url}) => url)
                : album.images.map(({url}) => url)
        })
    )
}