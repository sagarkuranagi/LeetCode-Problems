/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = new Map();

    function dfs(i, j) {
        const key = `${i},${j}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        // Pattern finished
        if (j === p.length) {
            return i === s.length;
        }

        const firstMatch =
            i < s.length &&
            (s[i] === p[j] || p[j] === '.');

        let result;

        if (j + 1 < p.length && p[j + 1] === '*') {

            result =
                dfs(i, j + 2) ||
                (firstMatch && dfs(i + 1, j));

        } else {
            // Normal character or '.'
            result =
                firstMatch &&
                dfs(i + 1, j + 1);
        }

        memo.set(key, result);
        return result;
    }

    return dfs(0, 0);
};