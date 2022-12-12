function twoDecimalPlaces(n) {
  // Your code here
//n =  String(n)// This function will return the number of decimal places needed to display the number
  n =  n.toFixed(2)// This function will return the number of decimal places needed to display the number
return parseFloat (n)
}
/*Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.*/

/*Example:    */
/*5.5589 is rounded 5.56   */
/*3.3424 is rounded 3.34*/
