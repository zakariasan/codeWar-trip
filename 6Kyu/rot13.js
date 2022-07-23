//Rot13

//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

//Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  //your code here
  //console.log(String.fromCharCode('s'.charCodeAt(0)-13))
  return message.split('').map(str =>{
    if( (str>='A' && str <= 'M') ||(str>='a' && str <= 'm'))
      {
        return String.fromCharCode(str.charCodeAt(0)+13);
      }
     else if((str>='N' && str <= 'Z') ||(str>='n' && str <= 'z'))
    {
      return String.fromCharCode(str.charCodeAt(0) - 13)
    }
    else 
      return str
   
  }).join('')   
}
