module.exports = function reverse (n) {
    return ((n * Math.sign(n)).toString().split('').reverse().join(''));
};