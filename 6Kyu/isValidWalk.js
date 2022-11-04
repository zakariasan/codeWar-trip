function isValidWalk(walk) {
  //insert brilliant code here
  let min = 0;
  let x = 0
  let y = 0

  if(walk.length != 10 )return false;
  
    
  for(let i = 0; i< walk.length ; i++)
    {
      if(walk[i] == 'n') x++;
      if(walk[i] == 's') x--;
      if(walk[i] == 'w') y++;
      if(walk[i] == 'e') y--;

    }
  
  console.log(min, walk)
  return x == 0 && y == 0;
}
