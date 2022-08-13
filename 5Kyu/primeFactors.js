//Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 //"(p1**n1)(p2**n2)...(pk**nk)"
//with the p(i) in increasing order and n(i) empty if n(i) is 1.

//Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
function primeFactors(n){
    //your code here
  let primes = [];
  for(let i = 2; i<=n ; i++){
    let count  = 0;
    while(n % i == 0){
      count++;
      n/=i
    }
    if(count == 0) continue;
    count > 1? primes.push(`(${i}**${count})`): primes.push(`(${i})`)
  }
  return primes.join('')
}
