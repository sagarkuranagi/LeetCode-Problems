/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
    const n = nums.length;

    const dp = [...nums];

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i + len <= n; i++) {
            const j = i + len - 1;

            dp[i] = Math.max(
                nums[i] - dp[i + 1],
                nums[j] - dp[i]
            );
        }
    }

    return dp[0] >= 0;
};