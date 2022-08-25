//"abcde" -> 0 # no characters repeats more than once
//"aabbcde" -> 2 # 'a' and 'b'
//"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//"indivisibility" -> 1 # 'i' occurs six times
//"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//"aA11" -> 2 # 'a' and '1'
//"ABBA" -> 2 # 'A' and 'B' each occur twice




function duplicateCount(text){
  //...
  let arr =[]
  let nbr;
   text.toLowerCase().split('').map(a=>{
    nbr = text.toLowerCase().split('').filter(el => el ===a).length;
     if(nbr > 1 && !arr.includes(a))
       arr.push(a)
  })
 console.log(arr, arr.length)
  return arr.length
}
