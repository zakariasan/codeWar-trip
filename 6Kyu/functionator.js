//I was recently killing time on Reddit when I stumbled across this image:


//on r/programmerhumor.

//So for this kata, let us all be person number 1 in that image.

//Write the function functionator(str) that given a string str will enable us to create this desired style of code writing.

//For example:

function functionator(str) {
 const handle = str.split(' ').reverse();
  const a =  handle.reduce((acc, name)=>{
    return {
      [name] :()=> acc,
    }
  },{})
  return a;
}

let obj = functionator('there are two kinds of people');

console.log(obj)
//console.log(obj.there())
