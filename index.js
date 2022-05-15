function isPalindrome(str) {
  // Write your algorithm here
  let splitString = str.split("");

  let reverseArray = splitString.reverse();

  let joinArray = reverseArray.join("");

  return joinArray;
  
}

isPalindrome("level")

console.log(isPalindrome);

/* 
  Add your pseudocode here
  // 
  use split to return a new array with each letter
  use reverse to reserve each letter
  use join to put each revsered letter into a string
  return reversed string
  add into Palindrome word

*/

/*
  Add written explanation of your solution here
  We created a Palindrome function that takes in a string as an argument. We then created three statements that all do different things. We used split to split each letter of our desired word into an array. We then used a reverse method to reverse our new array of splitted letters. We then used the join method to move each reserved letter into string format and returning it. And finally added in our Palindrome word.
  //
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
