
//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//What if the string is empty? Then the result should be empty object literal, {}.



function count (str) {  
  // The function code should be here
  let words = []
  //unique items in array
  str.split('').map(ele => {
    if(!words.includes(ele))
      words.push(ele);
  })
  
  let re = words.map(ele => {
    let nbr = 0;
    for(let i=0; i< str.length;i++)
      {
        if(str[i]== ele)
          nbr++;
      }
    let ob = [ele , nbr]
  return ob;
  })

const obj = Object.fromEntries(re);
  
  return obj
}
