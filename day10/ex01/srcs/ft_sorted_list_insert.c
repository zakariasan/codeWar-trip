#include "../includes/libft.h"

void ft_sorted_list_insert(t_list **begin_list, void *data, int (*cmp)())
{
    t_list *item;

    item = ft_create_elem(data);
    item->next = *begin_list;
    ft_list_sort(begin_list, cmp);
}
