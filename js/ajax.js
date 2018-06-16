// Execute the Ajax request
// Take in parameters the target URl and the callback function (called when the response is a success)
function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            //Call the callback function with the request response in parameter
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Error with this URL : " + url);
    });
    req.send(null);
}
