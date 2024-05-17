const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');  // Adjust the path to your server file

describe('GET /movies', () => {
    it('should return movies matching the search query', async () => {
        const response = await request(app)
            .get('/movies')
            .query({ search: 'Inception' })
            .expect(200);

        expect(response.body).to.be.an('array');
        expect(response.body).to.have.lengthOf.at.most(10);
        response.body.forEach(movie => {
            expect(movie).to.have.property('movie_id').that.is.a('number');
            expect(movie).to.have.property('title').that.is.a('string');
            expect(movie).to.have.property('poster_image_url').that.is.a('string');
            expect(movie).to.have.property('popularity_summary').that.is.a('string');
        });
    });

    it('should return 400 if search query is missing', async () => {
        const response = await request(app)
            .get('/movies')
            .expect(400);

        expect(response.body).to.have.property('error').that.is.a('string');
    });
});
