//Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.


function whatCentury(year)
{
  // code must go here
  let number = Number(year[0]+year[1]) +1;
  number = number.toString();
        if (number.endsWith("11")) return number+"th";
        if (number.endsWith("12")) return number+"th";
        if (number.endsWith("13")) return number+"th";
        if (number.endsWith("1")) return number+"st";
        if (number.endsWith("2")) return number+"nd";
        if (number.endsWith("3")) return number+"rd";
        return number+"th";

}
