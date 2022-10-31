function isPowerOfTwo(n){
  //.. should return true or false ..
let i = 0
if(n == 1)return true
  while(i++< n/2)
    {
      if(2**i == n)
        return true
    }
    return false
}
