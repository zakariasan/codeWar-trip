function trueOrFalse(val){
  if (val)    return "true"           
  else     return "false"
}



/*In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, ||, ! or some bitwise operators:&, |, ^*/

/*Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:*/

/*var arr=[];*/
/*...*/
/*...*/
/*......*/
/*if (arr.length) return "arr has elements";*/
/*else            return "arr is empty";*/



/*You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.*/

/*These values are converted to false in the conditional statement:*/

/*0, -0, "", null, undefined, NaNIn javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, ||, ! or some bitwise operators:&, |, ^*/

/*Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:*/

/*var arr=[];*/
/*...*/
/*...*/
/*......*/
/*if (arr.length) return "arr has elements";*/
/*else            return "arr is empty";*/
/*You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.*/

/*These values are converted to false in the conditional statement:*/

/*0, -0, "", null, undefined, NaN*/
