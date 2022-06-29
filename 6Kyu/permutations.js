//In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

function permutations(string) {
let result = []
if(string.length ===0)return [];
  if(string.length ===1)return [string];

  for(let i = 0; i< string.length ; i++){
    let current = string[i];
    if(string.indexOf(current) != i)
      continue
    let rem = string.slice(0, i).concat(string.slice(i+1, string.length));
    let other = permutations(rem)
    for( p of other){
      result.push(current + p)
    }
  }

  return result
}



