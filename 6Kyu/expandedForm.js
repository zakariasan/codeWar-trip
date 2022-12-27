const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");


//Ai answers 
function expandedForm(num) {
  // Your code here
    var str = num.toString();
  var expanded = '';
  for (var i = 0; i < str.length; i++) {
    var digit = str[i];
    if (digit !== '0') {
      var placeValue = Math.pow(10, str.length - i - 1);
      expanded += digit * placeValue + ' + ';
    }
  }
  return expanded.slice(0, -3);
}


/*Write Number in Expanded Form*/
/*You will be given a number and you will need to return it as a string in Expanded Form. For example:*/

/*expandedForm(12); // Should return '10 + 2'*/
/*expandedForm(42); // Should return '40 + 2'*/
/*expandedForm(70304); // Should return '70000 + 300 + 4'*/
/*NOTE: All numbers will be whole numbers greater than 0.*/



