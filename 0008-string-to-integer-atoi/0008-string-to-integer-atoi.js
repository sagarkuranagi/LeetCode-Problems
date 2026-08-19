/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;

    // 1. Skip leading spaces
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // 2. Determine sign
    let sign = 1;

    if (s[i] === '-') {
        sign = -1;
        i++;
    } else if (s[i] === '+') {
        i++;
    }

    // 3. Build the number
    let result = 0;

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        let digit = s[i] - '0';

        result = result * 10 + digit;

        // 4. Check 32-bit overflow
        if (result > 2147483647) {
            return sign === 1 ? 2147483647 : -2147483648;
        }

        i++;
    }

    return result * sign;
};