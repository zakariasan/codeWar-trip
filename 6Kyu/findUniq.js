
//There is an array with some numbers. All numbers are equal except for one. Try to find it!

//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//It’s guaranteed that array contains at least 3 numbers.

//The tests contain some very huge arrays, so think about performance.

function findUniq(arr) {
  // do magic
  let nbr1 = arr[0] ;
  nbr1 = arr.filter(a=> a==nbr1)
  return nbr1.length == 1 ? nbr1[0] : arr.find(a=> a!=nbr1[0]);
}

