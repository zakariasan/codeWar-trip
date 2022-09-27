
//Description:
//Encrypt this!

//You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

//Your message is a string containing space separated words.
//You need to encrypt each word in the message using the following rules:
//The first letter must be converted to its ASCII code.
//The second letter must be switched with the last letter
//Keepin' it simple: There are no special characters in the input.
//Examples:
//encryptThis("Hello") === "72olle"
//encryptThis("good") === "103doo"
//encryptThis("hello world") === "104olle 119drlo"



var encryptThis = function(text) {
  // Implement me! :)
  
 return text.split(' ').map( a=> {
    console.log(a.length)
       if(a.length ==1) return`${a[0].charCodeAt(0)}`;

    if(a.length ==2) return`${a[0].charCodeAt(0)}${a[1]}`;
    else if(a.length === 3) return `${a[0].charCodeAt(0)}${a[a.length-1]}${a[1]}`
    else{
      return `${a[0].charCodeAt(0)}${a[a.length-1]}${a.slice(2,a.length - 1)}${a[1]}`
    }
  }).join(' ')
}
