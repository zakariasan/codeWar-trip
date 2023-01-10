#include "../includes/libft.h"

void ft_list_push_back(t_list **begin_list, void *data)
{
    t_list *tmp;

    tmp = *begin_list;
    if(tmp)
    {
        while (tmp->next != NULL) {
            tmp = tmp->next;
        }
        tmp->next = ft_create_elem(data);
    }
        tmp = ft_create_elem(data);
}


