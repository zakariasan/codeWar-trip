//The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
//// should be 6: [4, -1, 2, 1]

var maxSequence = function(arr){
  // ...
  let end = 0
  let curr = arr[0];
  let max = arr[0];
if(arr.length <=0)
  return 0;
  for(let i = 1; i < arr.length; ++i ){
    curr = Math.max(arr[i], arr[i]+curr);
    
    if(curr > max){
      max = curr;
      end  = i;
    }
    
  }
 return max>0?max:0
}
