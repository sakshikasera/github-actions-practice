const http = require('http');
const request = require('supertest'); // Import supertest
const app = require('../src/app'); // Import the app, not the server

let server;

beforeAll((done) => {
  // Start the server before tests run
  server = http.createServer(app).listen(3000, () => {
    console.log('Test server running on http://localhost:3000');
    done();
  });
});

afterAll((done) => {
  // Close the server after all tests are done
  server.close(() => {
    done();
  });
});

describe('API Endpoints', () => {
  it('should return a welcome message', async () => {
    const response = await request(app).get('/'); // Use supertest to make a request
    expect(response.text).toBe('Welcome to the server!');
    expect(response.statusCode).toBe(200); // Optionally, check the status code as well
  });
});
