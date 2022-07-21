//This time no story, no theory. The examples below show you how to write function accum:

//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.



function accum(s) {
	// your code
  return s.split('').map((ele, i)=>{
    let  loo = i;
    let  item = ''
          console.log(i)

    while(loo >= 0){
      item ==''? item = ele.toUpperCase() : item +=ele.toLowerCase() ; 
      loo--;
    }
    ele = item;
    
    return ele
  }).join('-')
}
