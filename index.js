// At the store, there are n ice cream bars. You are given an array costs of length n,
// where costs[i] is the price of the ith ice cream bar in coins.
// The boy initially has coins to spend, and he wants to buy as many ice cream bars as possible.

// Create a function that returns the maximum number of ice cream bars the boy can buy with his coins

const maxIceCream = (array, coins) => {
  //Write code here
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= coins) {
      coins = coins - array[i];
      count++;
    }
  }
  return count;
};

// Example 1:
// Input: costs = [1,3,2,4,1], coins = 7
// Output: 4
// He can buy a maximum of 4 icecream bars at indices 0,1,2,4 of a total price of 1 + 3 + 2 + 1 = 7

// Example 2:
// Input: costs = [10,6,8,7,7,8], coins = 5
// Output: 0
// The boy cannot afford any of the ice cream bars.
