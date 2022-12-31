#include "../includes/libft.h"

int ft_strlen(char *word)
{
    int i;

    i = 0;
    while(word[i])
        i++;
    return i;
}
