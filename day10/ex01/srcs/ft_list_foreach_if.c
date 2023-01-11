#include "../includes/libft.h"

void ft_list_foreach_if(t_list *begin_list, void (*f)(void *), void *data_ref, int (*cmp)())
{
    t_list *tmp;

    tmp = begin_list;
    while(tmp)
    {
        if((*cmp)(tmp->data, data_ref) == 0)
        {
            (*f)(tmp->data);
        }
        tmp = tmp->next;
    }
}
