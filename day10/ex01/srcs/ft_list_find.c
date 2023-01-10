#include "../includes/libft.h"

t_list *ft_list_find(t_list *begin_list, void *data_ref, int (*cmp)())
{
    t_list *tmp;

    tmp = begin_list;
    while(tmp)
    {
        if((*cmp)(tmp->data, data_ref) == 0)
        {
            return tmp;
        }
        tmp = tmp->next;
    }
    return tmp;

}


