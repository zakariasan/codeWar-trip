

/*Your task, is to create NxN multiplication table, of size provided in parameter.*/

/*for example, when given size is 3:*/

/*1 2 3*/
/*2 4 6*/
/*3 6 9*/
/*for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]*/


multiplicationTable = function(size) {
  // insert code here
  let arr1 = [];
  let arr2 = [];
  let j = 0;
  let add
  for(let i = 1; i<=size;i++){
    add = i;
    for( j =1;j<=size; j++){
      arr1.push(add)
      add+=i
    }
    arr2.push(arr1)
        arr1= []

  }
  
  return arr2
}

