/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let start = 0;
    let end = 0;

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return [left + 1, right - 1];
    }

    for (let i = 0; i < s.length; i++) {

        let [left1, right1] = expand(i, i);

        let [left2, right2] = expand(i, i + 1);

        if (right1 - left1 > end - start) {
            start = left1;
            end = right1;
        }

        if (right2 - left2 > end - start) {
            start = left2;
            end = right2;
        }
    }

    return s.substring(start, end + 1);
};