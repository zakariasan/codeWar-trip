/*If　a = 1, b = 2, c = 3 ... z = 26*/

/*Then l + o + v + e = 54*/

/*and f + r + i + e + n + d + s + h + i + p = 108*/

/*So friendship is twice stronger than love :-)*/

/*The input will always be in lowercase and never be empty.*/




function wordsToMarks(string){
  
  let arr =[];
  string.split('').map(a=> arr.push(a.charCodeAt() - 96))
  //your code herea
  console.log(arr)
  return arr.reduce((a,b)=> a+=b,0)
}
