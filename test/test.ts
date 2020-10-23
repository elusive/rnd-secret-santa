import request from 'supertest';
import app from '../src/index';


describe('GET /', () => {
    it('should return expected signup page', async () => {
        const res = await request(app)
            .get('/')
            .expect(200);
    });
});
