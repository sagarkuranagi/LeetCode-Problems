/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if( x < 0)
    return false;

    let res = x;
    let res1 = 0;

    while(x > 0){
        let digit = x % 10;
        res1 = res1 * 10 + digit;
        x = Math.floor(x / 10);
    }
    return res === res1;
};