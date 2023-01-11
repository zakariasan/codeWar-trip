#include "../includes/libft.h"
#include <stdlib.h>

void ft_list_remove_if(t_list **begin_list, void *data_ref, int (*cmp)())
{
    t_list *tmp;
    t_list *list;

    tmp  = *begin_list;
    list = NULL;
    while(tmp)
    {
        if((*cmp)(tmp->data, data_ref) == 0)
        {
            if(!list)
                *begin_list = tmp->next;
            else
                list->next = tmp->next;
            free(tmp);
        }
        list = tmp;
        tmp = tmp->next;
    }
}
