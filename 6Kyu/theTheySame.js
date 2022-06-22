//Are they the "same"?
//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

//Examples
//Valid arrays
//a = [121, 144, 19, 161, 19, 144, 19, 11]  
//b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(ar1, ar2){
  if(!ar1 || !ar2 || ar1.length !== ar2.length) return false;
return ar1.map((a)=>(a*a)).sort().toString() === ar2.sort().toString();
}
