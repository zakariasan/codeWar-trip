#include "../includes/libft.h"

int *ft_map(int *tab, int length, int(*f)(int))
{
    int *store;
    int i;

   if((store = malloc(sizeof(int) * length + 1))== NULL)
       return NULL;
    i = 0;
    while(tab[i] && i < length)
    {
        store[i] = f(tab[i]);
        i++;
    }
    return store;
}

