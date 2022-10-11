/*John has invited some friends. His list is:*/

/*s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";*/
/*Could you make a program that*/

/*makes this string uppercase*/
/*gives it sorted in alphabetical order by last name.*/
/*When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.*/

/*So the result of function meeting(s) will be:*/

/*"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"*/
/*It can happen that in two distinct families with the same family name two people have the same first name too.*/




function meeting(s) {
    // your code
  let out = '';
  let str = s.split(';').map(a=> a.toUpperCase().split(":").reverse());
  str =  str.sort((a,b)=> a[0]===b[0]?a[1].localeCompare(b[1]):a[0].localeCompare(b[0]))
  for(let i=0; i<str.length; i++){
    
    out+= `(${str[i][0]}, ${str[i][1]})`
    
  }
  return out
}
