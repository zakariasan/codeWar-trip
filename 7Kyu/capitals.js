

/*Instructions*/
/*Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.*/

/*Example*/
/*Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );*/


var capitals = function (word) {
	// Write your code here
  let count = [];
  let str = word.toLowerCase()
  word.split('').map((a,i)=> a!=str[i] ? count.push(i):count)
  return count
};
