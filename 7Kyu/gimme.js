/*As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.*/

/*The input to the function will be an array of three distinct numbers (Haskell: a tuple).*/

/*For example:*/

/*gimme([2, 3, 1]) => 0*/
function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}
