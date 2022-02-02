function hasTargetSum(array, target) {
  for ( let i = 0; i < array.length; i++ ) {
    //runtime: n steps 
    for ( let k = i + 1; k < array.length; k++ ) {
    // //runtime: 0(n * n ) steps 
        if( array[k] + array[i] === target ) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  runtime : 0(n^2)
  space : 0(n)


*/

/* 
  Add your pseudocode here
  for an input array and a target number i.e [3, 8, 12, 4, 11, 7], 10)
   iterate through the array once to get our current number and iterate a second time while checling whether: current number + proceeding number = target
   return true if we find a match, otherwise return false. 
  
*/

/*
  Add written explanation of your solution here
  I am using a nested for..Loop. First loop iterates the array from index 0 selecting each number, the nested/second loop starts at index 1 in order to create a sum of the current and nested iteration. 
  i used a If statement to check whether the sum of the first and nested iteration equals our target number. If we find a match we return true, else false. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 4));
}

module.exports = hasTargetSum;
