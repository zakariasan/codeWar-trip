//Description:
//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

//Examples
//replace("Hi!") === "H!!"
//replace("!Hi! Hi!") === "!H!! H!!"
//replace("aeiou") === "!!!!!"
//replace("ABCDE") === "!BCD!



function replace(s){
  //coding and coding....
  let ex = ['a','e','i','o','u','A','E','I','O','U'];
  return s.split('').map(a=> ex.includes(a)?'!':a).join('')
  
}
