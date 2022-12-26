#include "../includes/libft.h"

void ft_putstr(char *w)
{
    int i;

    i = 0;
    while(w[i])
    {
        write(1, &w[i++], 1);
    }
}
