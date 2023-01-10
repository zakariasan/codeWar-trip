#include "../includes/libft.h"

t_list *ft_list_last(t_list *begin_list)
{
    t_list *tmp;

    tmp = begin_list;
    if(tmp)
    {
        while (tmp->next != NULL) 
        {
            tmp = tmp->next;
        }
        return tmp;
    }
    return NULL;
}
