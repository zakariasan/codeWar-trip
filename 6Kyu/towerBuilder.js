
//Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

//For example, a tower with 3 floors looks like this:

//[
  //"  *  ",
  //" *** ", 
  //"*****"
//]
//And a tower with 6 floors looks like this:

//[
  //"     *     ", 
  //"    ***    ", 
  //"   *****   ", 
  //"  *******  ", 
  //" ********* ", 
  //"***********"
//]

function towerBuilder(nFloors) {
  // build here
  let str='';
  let space=nFloors - 1;
  let start = 1;
  let res=[];
  
  for(let y = 0; y < nFloors; y++){
    str+= ' '.repeat(space);
    str+= '*'.repeat(start);
    str+= ' '.repeat(space);

    space--;
    start+=2;
    res.push(str);
    str=''
  }
  return res
}

