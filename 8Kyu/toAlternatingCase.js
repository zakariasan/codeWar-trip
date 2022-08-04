
/*altERnaTIng cAsE <=> ALTerNAtiNG CaSe*/
/*altERnaTIng cAsE <=> ALTerNAtiNG CaSe*/

String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  
  let str = this.split('').map(a => {
    if(a === a.toUpperCase())
      return a.toLowerCase();
    else
      return a.toUpperCase();
  }).join('')
  return str;
  
}
