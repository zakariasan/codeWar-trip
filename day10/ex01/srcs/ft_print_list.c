#include "../includes/libft.h"

void ft_print_list(t_list *list)
{
    t_list *tmp;

    tmp = list;
    while(tmp)
    {
        ft_putstr(tmp->data);
        tmp = tmp->next;
    }
}
