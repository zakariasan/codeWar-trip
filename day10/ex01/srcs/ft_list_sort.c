#include "../includes/libft.h"

void ft_list_sort(t_list **begin_list, int (*cmp)())
{
    t_list *tmp;
    t_list *sort;
    void    *data_ref;

    tmp = *begin_list;
    while (tmp)
    {
        sort = tmp;
        while (sort)
        {
            if((*cmp)(tmp->data, sort->data)>0)
            {
                data_ref = tmp->data;
                tmp->data = sort->data;
                sort->data = data_ref;
            }
            sort = sort->next;
        }
        tmp = tmp->next;
    
    }

}
