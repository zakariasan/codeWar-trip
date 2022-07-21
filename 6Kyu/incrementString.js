//Your job is to write a function which increments a string, to create a new string.

//If the string already ends with a number, the number should be incremented by 1.
//If the string does not end with a number. the number 1 should be appended to the new string.
//Examples:

//foo -> foo1

//foobar23 -> foobar24

//foo0042 -> foo0043

//foo9 -> foo10


function incrementString (str) {
  // return incrementedString
  let words = str.split('').filter(a => a>= 'a' && a<='z').join('')
  let nbr  = str.split('').filter(a => a>= '0' && a<='9').join('')
  let size = nbr.length;
  
  size == 0 ? nbr = '1' : nbr = (parseInt(nbr) + 1).toString();
  
  while(nbr.length < size)
    {
      nbr = '0' + nbr;
    }
  return words + nbr
}
