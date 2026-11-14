/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=3) return n;

    let step = 3;
    let step1 = 2;
    let steps =1;

    for(i = 3; i< n; i++){
        steps = step + step1;
        step1 = step;
        step = steps;
    }
    return steps;
};