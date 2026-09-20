# Raw HTTP Server

A simple HTTP server built with **Node.js** using the built-in `http` module.

This project demonstrates how basic HTTP routing and responses work without using frameworks such as Express.

## Features

* Raw Node.js HTTP server
* Basic routing
* GET routes
* JSON responses
* Text responses
* HTTP status codes
* Reusable response helper
* No external web framework

## Project Structure

```text
raw-http/
├── scripts/
│   └── script.js
├── package.json
├── package-lock.json
└── server.js
```

## Routes

| Method | Route         | Description   |
| ------ | ------------- | ------------- |
| GET    | `/`           | Home page     |
| GET    | `/signup`     | Signup page   |
| GET    | `/login`      | Login page    |
| Any    | Unknown route | Returns `404` |

## How It Works

The server uses Node.js's built-in `http` module:

```js
const http = require("http");
```

The server receives a request and checks:

```js
req.method
req.url
```

For example:

```js
if (req.method === "GET" && req.url === "/") {
    sendResponse(res, 200, {
        message: "Welcome to home page",
        status: "success"
    }, true);

    return;
}
```

The `sendResponse()` function is stored separately in:

```text
scripts/script.js
```

This keeps response logic reusable instead of repeating it throughout the server.

## Installation

Clone the repository:

```bash
git clone https://github.com/DeddCode31251/Raw-Http/
```

Enter the project directory:

```bash
cd raw-http
```

Install dependencies:

```bash
npm install
```

## Run the Server

```bash
node server.js
```

The server will run at:

```text
http://localhost:3000
```

## Testing

You can test the routes using a browser or `curl`.

```bash
curl http://localhost:3000/
```

```bash
curl http://localhost:3000/signup
```

```bash
curl http://localhost:3000/login
```

Test a route that doesn't exist:

```bash
curl http://localhost:3000/test
```

The server will return a `404` response.

## Technologies

* Node.js
* JavaScript
* HTTP
* npm

## Author

**Deadcode**
