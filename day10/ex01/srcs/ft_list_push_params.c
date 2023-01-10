#include "../includes/libft.h"

t_list *ft_list_push_params(int ac, char **av)
{
    t_list  *tmp;
    t_list  *list;
    int     i;

    i = 1;
    list = NULL;
    while(i < ac)
    {
        tmp = ft_create_elem(av[i]);
        tmp->next = list;    
        list = tmp;
        i++;
    }
    return list;
}
