function firstNonConsecutive (arr) {
  for(let i = 0; i< arr.length - 1 ; ){
    console.log(i,arr)
  if(arr[i]+  1 == arr[i+1])
    i++;
    else
      return arr[i+1]
}
  return null
}


/*our task is to find the first element of an array that is not consecutive.*/

/*By not consecutive we mean not exactly 1 larger than the previous element of the array.*/

/*E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.*/

