#include "../includes/libft.h"
#include <stdlib.h>

t_list *ft_create_elem(void *data)
{
    t_list *tmp;

    if(!(tmp = malloc(sizeof(t_list))))
        return NULL;
    tmp->data = data;
    tmp->next = NULL;
    return tmp;
}
