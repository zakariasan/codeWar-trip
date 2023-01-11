#include "../includes/libft.h"

void ft_list_reverse(t_list **begin_list)
{
    t_list *list;
    t_list *tmp;

    list = NULL;
    tmp  = *begin_list;
    while (*begin_list)
    {
        *begin_list = (*begin_list)->next;
        tmp->next = list;
        list = tmp;
        tmp = *begin_list;
    }
    *begin_list = list;
}

