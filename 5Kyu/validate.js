/*You need to write regex that will validate a password to make sure it meets the following criteria:*/

/*At least six characters long*/
/*contains a lowercase letter*/
/*contains an uppercase letter*/
/*contains a digit*/
/*only contains alphanumeric characters (note that '_' is not alphanumeric)*/





// assign your RegExp to REGEXP
const REGEXP = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d]{6,}$/;

function validate(password) {
  if(password.length <6) return false;
  var lowerCase="abcdefghijklmnopqrstuvwxyz";
  var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number="0123456789";
  var index = [-1,-1,-1];
  for(i = 0; i< password.length; i++){
    if(lowerCase.indexOf(password.charAt(i)) >= 0){
      index[0] = lowerCase.indexOf(password.charAt(i));
    }else {
      if(upperCase.indexOf(password.charAt(i)) >= 0){
        index[1] = upperCase.indexOf(password.charAt(i));
      }
      else{
        if(number.indexOf(password.charAt(i)) >= 0){
          index[2] = number.indexOf(password.charAt(i));
        }else return false;
      }
    }
  }
  if(index[0] === -1 || index[1] === -1 || index[2] === -1){
    return false;
  }
  return true;
}
