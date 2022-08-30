/*When provided with a letter, return its position in the alphabet.*/

/*Input :: "a"*/

/*Ouput :: "Position of alphabet: 1"*/



function position(letter){
//Write your own Code!
  return `Position of alphabet: ${letter.charCodeAt(letter) - 96}`
}
