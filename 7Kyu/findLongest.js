function findLongest(array){
  // code here
  let size = array[0] ;
  let len = String(array[0]).split('').length
for(let i =0; i< array.length; i++)
  {
    if(len < String(array[i]).split('').length){
      size = array[i];
      len = String(array[i]).split('').length
    }
    
  }
  return size
}


/*Find the number with the most digits.*/

/*If two numbers in the argument array have the same number of digits, return the first one in the array.*/


