
//#Description:
//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

/*Examples*/
/*remove("Hi!") === "Hi"*/
/*remove("Hi!!!") === "Hi!!"*/
/*remove("!Hi") === "!Hi"*/
/*remove("!Hi!") === "!Hi"*/
/*remove("Hi! Hi!") === "Hi! Hi"*/
/*remove("Hi") === "Hi"*/


function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}
function remove (string) {
  //coding and coding....
  
  let str = string.split('').map(a=> a=='!'?'':a).join('')
  return str+'!'
  }
