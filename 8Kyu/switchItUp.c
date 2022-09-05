/*When provided with a number between 0-9, return it in words.*/

/*Input :: 1*/

/*Output :: "One".*/

/*If your language supports it, try using a switch statement.*/

/*FUNDAMENTALS*/

char* switchItUp(int number)
{
   char *desc[] = {
    "Zero",  "One",  "Two", "Three",
    "Four",  "Five", "Six", "Seven",
    "Eight", "Nine" };
    
  return desc[number];
}
