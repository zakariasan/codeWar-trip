#include "../includes/libft.h"

int ft_strcmp(char *s1, char *s2)
{
    int i;
    int diff;

    diff = 0;
    i = 0;
    while(s1[i] == s2[2] && s1[i] != '\0' && s2[i] !='\0')
        i++;
    if (s1[i] != s2[i])
	{
		diff = s1[i] - s2[i];
		return (diff);
	}else 
		return (0);
}
