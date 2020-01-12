var factorial2 = function (n, a) {
    if (n == 0) {
	return a;
    } else {
	return factorial2(n - 1, n * a);
    }
};

var cpsFactorial2 = function (k, n, a) {
    if (n == 0) {
	k(a);
    } else {
	cpsFactorial2(k, n - 1, n * a);
    }
};

console.log(factorial2(5, 1));

cpsFactorial2(console.log, 5, 1);
