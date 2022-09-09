function domainName(url){
  //your code here
console.log(url)
	let str = url.split('.')

  if(str[0] === 'www')
    return str[1].split('.')[0];
  else if(str[0].split('://')[1] === 'www')
      return str[1];
	    else if(str[0].split('://')[0] === 'http' || str[0].split('://')[0] === 'https')
	 return str[0].split('://')[1]
    else return str[0]
   
}
let value  = domainName("icann.org");
console.log(value)
