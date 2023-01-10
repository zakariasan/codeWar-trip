#include "../includes/libft.h"

int ft_list_size(t_list *begin_list)
{
    int i;
    t_list *tmp;

    tmp = begin_list;
    i = 0;
    if(tmp){
        while (tmp) 
        {
            i++;
            tmp =tmp->next;
        }
    }
       return i;
}
