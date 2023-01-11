#include "../includes/libft.h"

void ft_list_reverse(t_list **begin_list)
{
    t_list *tmp;
    t_list *rev;
    t_list *list;

    tmp = *begin_list;
    list = NULL;
    while (tmp)
    {
        rev = tmp->next;
        tmp->next= list;
        list = tmp;
        tmp = rev;
    }
    *begin_list = list;

}
