const http = require("http");
const { sendResponse } = require("./scripts/script");

const server = http.createServer((req, res) => {

    // GET /
    if (req.method === "GET" && req.url === "/") {
        sendResponse(res, 200, {
            message: "Welcome to home page",
            status: "success"
        }, true);

        return;
    }

    // GET /signup
    if (req.method === "GET" && req.url === "/signup") {
        sendResponse(res, 200, {
            message: "Signup Page",
            method: "GET"
        }, true);

        return;
    }

    // GET /login
    if (req.method === "GET" && req.url === "/login") {
        sendResponse(res, 200, {
            message: "Login Page",
            method: "GET"
        }, true);

        return;
    }

    // 404
    sendResponse(res, 404, {
        error: "Route not found",
        path: req.url,
        method: req.method
    }, true);
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Raw HTTP running at http://localhost:${PORT}`);
});
