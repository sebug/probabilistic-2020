var totalCpsFactorial = function (k, err, n) {
    if (n < 0) {
	err("cpsFactorial: n < 0!");
    } else if (n == 0) {
	k(1);
    } else {
	totalCpsFactorial(
	    function (x) { k(x * n) },
	    err,
	    n - 1);
    }
};

var printError = function (x) {
    console.log("Error: " + x);
};

totalCpsFactorial(console.log, printError, 5);
totalCpsFactorial(console.log, printError, -1);
