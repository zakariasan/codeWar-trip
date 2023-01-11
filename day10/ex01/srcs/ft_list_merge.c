#include "../includes/libft.h"

void ft_list_merge(t_list **begin_list1, t_list *begin_list2)
{
    t_list *tmp;

    tmp = *begin_list1;
        while(tmp->next !=NULL)
            tmp = tmp->next;
        tmp->next = begin_list2;

}
