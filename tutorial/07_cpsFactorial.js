var cpsFactorial = function (k, n) {
    if (n == 0) {
	k(1);
    } else {
	cpsFactorial(
	    function (x) { k(x * n) },
	    n - 1);
    }
};

cpsFactorial(console.log, 5);
