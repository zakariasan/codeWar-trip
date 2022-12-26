
#include "../includes/libft.h"

void ft_foreach(int *tab, int length, void(*f)(int))
{
    int i;

    i = 0;
    while (i < length && tab[i])
    {
        f(tab[i++]);
    }
}
