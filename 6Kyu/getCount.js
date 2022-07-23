
//Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelsCount = ['a','e','i','o','u'];
  let count = 0;
  str.split('').map(a => vowelsCount.includes(a)? count++: count )
return count
}
