#include "../includes/libft.h"
#include <stdlib.h>

void ft_list_clear(t_list **begin_list)
{
    t_list *tmp;

    while (*begin_list)
    {
        tmp = *begin_list;
        *begin_list = (*begin_list)->next;
        free(tmp);
    }
    *begin_list = NULL;
}
