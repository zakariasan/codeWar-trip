#include "../includes/libft.h"

void ft_list_push_front(t_list **begin_list, void *data)
{
    t_list *tmp;
    
    tmp  = ft_create_elem(data);
    if(*begin_list)
    {
        tmp->next = *begin_list;
    }
        *begin_list = tmp;
}
