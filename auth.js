lpTag.sdes.push({
    "type": "ctmrinfo",
    "info": {
        customerId: '1'
    }
});

// Authentication JSMethod for LiveEngage
var lpGetAuthenticationToken = function(callback) {
    console.log("inside lpGetAuthenticationToken!");
    var token = "mel_norway";
    if (token) {
        console.log("got token! " + token);
        console.log("calling callback with token...");
        callback(token);
    }
};