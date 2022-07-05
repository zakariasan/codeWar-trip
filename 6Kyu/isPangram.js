//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(str)
{

let abc =[];
    for(let i = 'a' ; i <='z' ;)
    {
        abc.push(i);
        i = String.fromCharCode( i.charCodeAt(0) + 1);
    }
    
    return abc.every(a => str.toLowerCase().split('').includes(a));
}

console.log(isPangram("This is not a pangram." ));
