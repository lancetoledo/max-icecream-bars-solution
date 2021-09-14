// At the store, there are n ice cream bars. You are given an array costs of length n,
// where costs[i] is the price of the ith ice cream bar in coins.
// The boy initially has coins to spend, and he wants to buy as many ice cream bars as possible.

// Create a function that returns the maximum number of ice cream bars the boy can buy with his coins

const maxIceCream = (costs, coins) => {
  //Write code here
  var array = [];
  var sum = 0;

  console.log(costs);
  // Normal sort method doesn't sort it by ascending order just by the 1st number in the integer
  costs.sort();
  console.log(costs);

  // This sorts the array properly by ascending order (least to greatest)
  costs.sort(function(a, b) {
    return a - b;
  });

  console.log(costs);
  for (let i = 0; i < costs.length; i++) {
    sum = sum + costs[i];
    if (sum <= coins) {
      array.push(i);
    }
  }

  console.log(array);
  return array.length;
};

// Example 1:
// Input: costs = [1,3,2,4,1], coins = 7
// Output: 4
// He can buy a maximum of 4 icecream bars at indices 0,1,2,4 of a total price of 1 + 3 + 2 + 1 = 7

// Example 2:
// Input: costs = [10,6,8,7,7,8], coins = 5
// Output: 0
// The boy cannot afford any of the ice cream bars.

function sortAlg(array) {
  let copy = [...array];
  let value = 0;
  for (let i = 0; i < copy.length; i++) {
    for (let j = i + 1; j < copy.length; j++) {
      if (copy[i] > copy[j]) {
        value = copy[j];
        copy[j] = copy[i];
        copy[i] = value;
      }
    }
  }
  return copy;
}
