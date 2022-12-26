function chooseBestSum(t, k, ls) {
    // your code
	  //console.log('hello world')
	if(k > ls.length)
    return null;
	else{
	  console.log('hello world')
	  console.log('hello world2222')
		let j;
    let distances= [];
    let tab = [];
    for(let i=0; i< ls.length;i++){
		tab.push(ls[i]);
		for( j = i + 1; j<ls.length && j<k+i ;j++){
			//console.log('hello world')
			tab.push(ls[j])
		}
		console.log(tab)
		tab = []
    }
  }
}

chooseBestSum(174, 3, [50, 55, 56, 57, 58])
