/*You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.*/

/*Array can contain numbers or strings. X can be either.*/

/*Return true if the array contains the value, false if not.*/

function check1(a, x) {
  return a.includes(x)  console.log(a)

  // your code here
}
function check(a,x){
    console.log(a)

  if(x === a[0])
    return true;
  if(a.length == 1)return false
  else
    return check(a.slice(1,a.length),x)
 // return false
  
//return a.includes(x)  
  
};
