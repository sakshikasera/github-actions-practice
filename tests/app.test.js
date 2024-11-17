const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Welcome to the Mini Project!');
  });
});

describe('GET /api/hello', () => {
  it('should return a hello message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'Hello, world!' });
  });
});

describe('GET /api/about', () => {
  it('should return an about message', async () => {
    const res = await request(app).get('/api/about');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: 'This is a mini project!' });
  });
});
