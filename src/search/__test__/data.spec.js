import processData from '../data'

describe('data', () => {
    it('should extract artist items', () => {
        // Arrange
        const artistData = require('./artist.json')

        // Act
        const processedData = processData(artistData)

        // Assert
        expect(processedData).toHaveLength(artistData.artists.items.length)

        expect(Object.keys(processedData[0])).toHaveLength(3)
        expect(processedData[0]).toHaveProperty('name')
        expect(processedData[0]).toHaveProperty('uri')  
        expect(processedData[0]).toHaveProperty('images')  
    })
})