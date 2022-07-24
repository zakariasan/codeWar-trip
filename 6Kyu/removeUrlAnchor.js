
//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//Examples
//"www.codewars.com#about" --> "www.codewars.com"


function removeUrlAnchor(url){
  return url.split('#')[0];
}
