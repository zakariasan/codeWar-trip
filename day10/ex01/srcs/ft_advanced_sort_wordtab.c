#include "../includes/libft.h"

void ft_advanced_sort_wordtab(char **tab, int(*cmp)(char*, char*))
{
    int i;
    int j;
    char *tmp;

    i = 0;
    while (tab[i] != 0) 
    {
        j = i + 1;
        while(tab[j] !=  0) 
        {
            if((*cmp)(tab[i], tab[j]) > 0)
            {
                tmp = tab[i];
                tab[i] = tab[j];
                tab[j] = tmp;
            }
            j++;
        }
        i++;
    }
}
