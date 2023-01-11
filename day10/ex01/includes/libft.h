#ifndef __LIBFT_H__
#define __LIBFT_H__

#include "unistd.h"
#include <stdlib.h>

typedef struct      s_list
{
    struct s_list   *next;
    void            *data;
}                   t_list;

typedef struct  s_opp
{
    char    *str;
    int     (*out)(int ,int);
}               t_opp;

void    ft_putchar(char c);
void    ft_putstr(char *w);
void    ft_putnbr(int n);
int     ft_strlen(char *word);
int     ft_atoi(const char *str);
int     ft_strcmp(char *s1, char *s2);


void    ft_foreach(int *tab, int length, void(*f)(int));
int     *ft_map(int *tab, int length, int(*f)(int));
int     ft_any(char **tab, int(*f)(char *));
int     ft_count_if(char **tab, int(*f)(char *));
int     ft_is_sort(int *tab, int length, int(*f)(int ,int));
void    ft_sort_wordtab(char **tab);
void    ft_advanced_sort_wordtab(char **tab, int(*cmp)(char*, char*));

//ft_do_op
int     ft_add(int nbr1, int nbr2);
int     ft_sub(int nbr1, int nbr2);
int     ft_mul(int nbr1, int nbr2);
int     ft_div(int nbr1, int nbr2);
int     ft_mod(int nbr1, int nbr2);
int     ft_getOp(char *operato);
int     ft_do_op(char *nbr1, char *op, char *nbr2);
int     ft_usage();
int ft_advanced_do_op(char *nbr1, char *op, char *nbr2);

//linked func
t_list  *ft_create_elem(void *data);
t_list  *ft_list_last(t_list *begin_list);
t_list  *ft_list_push_params(int ac, char **av);
t_list  *ft_list_at(t_list *begin_list, unsigned int nbr);
t_list *ft_list_find(t_list *begin_list, void *data_ref, int (*cmp)());


void    ft_list_push_back(t_list **begin_list, void *data);
void    ft_list_push_front(t_list **begin_list, void *data);
void    ft_list_clear(t_list **begin_list);
void    ft_print_list(t_list *list);
void    ft_list_reverse(t_list **begin_list);
void    ft_list_foreach(t_list *begin_list, void (*f)(void *));
void    ft_list_foreach_if(t_list *begin_list, void (*f)(void *), void *data_ref, int (*cmp)());
void    ft_list_remove_if(t_list **begin_list, void *data_ref, int (*cmp)());
void    ft_list_merge(t_list **begin_list1, t_list *begin_list2);
void    ft_list_sort(t_list **begin_list, int (*cmp)());
void    ft_sorted_list_insert(t_list **begin_list, void *data, int (*cmp)());
void    ft_sorted_list_merge(t_list **begin_list1, t_list *begin_list2, int (*cmp)());
int     ft_list_size(t_list *begin_list);


#endif
