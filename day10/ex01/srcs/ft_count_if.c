#include "../includes/libft.h"

int     ft_count_if(char **tab, int(*f)(char *))
{
    int i;
    int count_if;

    i = 0;
    count_if = 0;
    while(tab[i])
    {
        if(f(tab[i]) == 1)
            count_if++;
        i++;
    }
    return count_if;
}
