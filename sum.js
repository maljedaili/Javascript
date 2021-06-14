function numSum(n) {
    var sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}
console.log(numSum(3));

function sum(...args) {
    console.log(args)
}
sum(3, 4, 5, 6, 7, 8, 9, 10, 40);

function sum1(...args) {
    return args.reduce(function (a, b) { return a + b});
}
console.log(sum1(1,2,3));
