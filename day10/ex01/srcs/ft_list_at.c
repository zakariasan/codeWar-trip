#include "../includes/libft.h"

t_list *ft_list_at(t_list *begin_list, unsigned int nbr)
{
    unsigned int i;
    t_list *tmp;
    unsigned int size;

    size    = ft_list_size(begin_list);
    tmp     = begin_list;
    i       = 0;
    if(tmp && nbr < size)
    {
        while (tmp)
        {
            if(i == nbr)
                return tmp;
            tmp = tmp->next;
            i++;
        }
    }
    return NULL;
}
