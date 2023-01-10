#include "../includes/libft.h"

t_list *ft_list_at(t_list *begin_list, unsigned int nbr)
{
    int size;
    int i;
    t_list *tmp;

    tmp = begin_list;
    size = ft_list_size(tmp);
    i = 0;
    if(begin_list && nbr < size)
    {
        while (i < nbr)
        {
            tmp = tmp->next;
            i++;
        }
        return tmp;

    }else
        return NULL;
}
