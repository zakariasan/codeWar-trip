#ifndef __LIBFT_H__
#define __LIBFT_H__

#include "unistd.h"
#include <stdlib.h>

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


int     ft_add(int nbr1, int nbr2);
int     ft_sub(int nbr1, int nbr2);
int     ft_mul(int nbr1, int nbr2);
int     ft_div(int nbr1, int nbr2);
int     ft_mod(int nbr1, int nbr2);
int     ft_getOp(char *operato);
int     ft_do_op(char *nbr1, char *op, char *nbr2);
#endif
