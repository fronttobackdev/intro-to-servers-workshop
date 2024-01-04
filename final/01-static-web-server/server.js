import http from "node:http";

const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
	switch (req.method.toLowerCase()) {
		case "get":
			res.statusCode = 200;
			res.setHeader("Content-Type", "text/plain");
			res.end("Hello World\n");
			break;
		default:
			res.statusCode = 405;
			res.end();
			break;
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
