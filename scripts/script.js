// ===== [Helpers Functions] =====


// sendResponse()
function sendResponse(res, resCode = 200, data = "", isJson = false) {
    res.statusCode = resCode;

    if (isJson) {
        // Tell the client that we are sending JSON
        res.setHeader("Content-Type", "application/json");

        // Convert JavaScript object -> JSON string
        res.end(JSON.stringify(data));
    } else {
        // Normal text response
        res.setHeader("Content-Type", "text/plain");

        res.end(data);
    }
}

module.exports = { sendResponse };
