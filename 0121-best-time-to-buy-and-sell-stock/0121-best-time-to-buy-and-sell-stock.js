/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0]
    let max = 0
    let Dprofite = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        }
        profite = prices[i] - min
        if (profite > max) {
            max = profite
        }
    }
    return max;
};