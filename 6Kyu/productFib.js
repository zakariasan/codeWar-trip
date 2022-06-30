//The Fibonacci numbers are the numbers in the following integer sequence (Fn):

//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

//such as

//F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

//Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

//F(n) * F(n+1) = prod.

//Your function productFib takes an integer (prod) and returns an array:

unction productFib(prod){
  // ...Let's go zak_4r1A
   var f0 = 0;
   var f1 = 1;

  while(f0*f1 <prod){
    f1 += f0;
    f0 = f1-f0;
  }
  return [f0, f1, f0*f1 === prod]
}
