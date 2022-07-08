//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

//Examples
//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 

function duplicateEncode(word){
    // ...
  let str = '';
  word = word.toLowerCase()|| word;
  word.split('').filter((x,i) =>{
    if(word.indexOf(x) !== i)
      str+=')';
    else if(word.lastIndexOf(x) !== i)
      str += ')';
    else
      str += '('
  })
  return str;

}
