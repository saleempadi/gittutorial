var http = require('http');
var assert = require('assert');
var server = require('./server.js');
describe('HTTP Server Test', function () {
	before(function () {
		server.listen(8080);
	});
	after(function () {
		server.close();
	});
	describe('/', function () {
		it('should be Hello, Mocha!', function (done) {
			http.get('http://127.0.0.1:8080', function (response) {
				assert.equal(response.statusCode, 200);
				var body = '';
				response.on('data', function (d) {
					body += d;
				});
				response.on('end', function () {
					assert.equal(body, 'Hello, Mocha!');
					done();
				});
			});
		});
	});
});