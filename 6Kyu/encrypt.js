function encrypt(text, n) {
  if(!text || n<=0) return text;
  let out = text;
  let res = '';
 let oddin;
  let evening;
  console.log('odd ---->' , oddin, n)
  console.log('even--->', evening,n)
  for(let i = 1; i<=n;i++)
    {
      oddin = out.split('').filter((a,i)=> i%2 != 0).join('');
     evening = out.split('').filter((a,i)=> i%2 == 0).join('');
      
      res+=oddin;
      res+=evening;
    out = res;
      res ='';
    }
  return  out
}

function decrypt(encryptedText, n) {
  if(!encryptedText || n<=0) return encryptedText;
  
    let table= [];
  for(let i = 0,t=1; t < encryptedText.length;){
	  table[t] = encryptedText[i];
	  t+=2;
	  i++;

	console.log('i = ', i)
  }

  return table;
}
let tab = decrypt("hsi  etTi sats!", 1)
console.log(tab)
