/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = 0;

    while (x !== 0) {
        let digit = x % 10;
        x = Math.trunc(x / 10);

        result = result * 10 + digit;

        // Check signed 32-bit range
        if (result > 2147483647 || result < -2147483648) {
            return 0;
        }
    }

    return result;
};