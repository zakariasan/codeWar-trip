function thirt(n) {
    // your code
  let nbr 
  let outer = n;
  let i = 1;
  let base = 0;
  while(outer != base){
    base = outer;
    i = 0
    nbr = outer.toString().split('').reverse()
        outer = 0;

  for(; i< nbr.length; i++) {
    outer += ((10**i)%13) * parseInt(nbr[i])

  }
 }
  return outer
}
