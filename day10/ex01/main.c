#include "./includes/libft.h"

int main(int ac, char** av)
{
    t_list *list;
    /*t_list *rev;*/

    list = ft_list_push_params(ac, av);
    ft_print_list(list);
    ft_list_sort(&list,&ft_strcmp);
    ft_putstr("\n______________Sort_________\n");

    ft_print_list(list);

    ft_list_reverse(&list);
   ft_putstr("\n______________Reverse_________\n");

    ft_print_list(list);
    return 0;
}



    /*t_list *list;*/
    /*t_list *last;*/


    /*list = ft_create_elem("hello>>>");*/
    /*ft_list_push_back(&list, "back>>>");*/
    /*ft_list_push_front(&list, "front>>>");*/
    
    /*ft_print_list(list);*/
    

    /*ft_putstr("\nsizeOf list : ");*/
    /*ft_putnbr(ft_list_size(list));*/
    /*ft_putstr("\n-----Last item---------\n ");*/

    /*last = ft_list_last(list);*/
    /*ft_print_list(last);*/
 
