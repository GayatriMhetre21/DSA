//you are given an array prices where prices is the price of a given stock on the ith day you want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
//return the maximum profit you can achieve from this transaction if you cannot achieve any profit,return 0

function maxProfit(prices) {
    let min = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++){
        if (prices[i] - min > max) {
            max = prices[i] - min;
        }
        if (prices[i] < min) {
            min = prices[i];
        }
    }
    return max;
}
let prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));
