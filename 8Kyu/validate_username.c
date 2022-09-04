/*Write a simple regex to validate a username. Allowed characters are:*/

/*lowercase letters,*/
/*numbers,*/
/*underscore*/
/*Length should be between 4 and 16 characters (both included).*/


#include <stdbool.h>
#include <string.h>

bool validate_username (const char *username)
{
  int i;
  i = 0;
  if(strlen(username)<4 ||  strlen(username)> 16)
    return false;
  while(username[i])
  {
    if((username[i] >= 'a' && username[i] <='z')|| (username[i] >= '0' && username[i] <='9')
      || username[i] == '_')
    i++;
    else
      return false;
  }
	return true;
}
