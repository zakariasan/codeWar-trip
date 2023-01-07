#include "../includes/libft.h"
#include <stdlib.h>

/*#include "../includes/ft_oop.h"*/
/*int ft_getOp(char *operator)*/
/*{*/
    /*int i;*/

    /*i = 0;*/
    /*while(operator && gl_opptab[i].str){*/
        /*if(ft_strcmp(operator, gl_opptab[i].str) == 0)*/
            /*return i;*/
        /*i++;*/
    /*}*/
    /*return -1;*/
/*}*/
int ft_do_op(char *nbr1, char *op, char *nbr2)
{
    int n1;
    int n2;
    int (**fptr)(int, int);
    int i;

    if(!(fptr = malloc(sizeof(*fptr) * 5 +1)))
        return -1 ;
    fptr[0] = &ft_add;
    fptr[1] = &ft_sub;
    fptr[2] = &ft_mul;
    fptr[3] = &ft_div;
    fptr[4] = &ft_mod;

    n1 = ft_atoi(nbr1);
    n2 = ft_atoi(nbr2);
    i = ft_getOp(op);
    
    if(i != -1)
    {
        return fptr[i](n1, n2);
    }
    return 0;
}
int ft_add(int nbr1, int nbr2)
{
    return nbr1 + nbr2;
}

int ft_sub(int nbr1, int nbr2)
{
    return nbr1 - nbr2;
}

int ft_mul(int nbr1, int nbr2)
{
    return nbr1 * nbr2;
}

int ft_div(int nbr1, int nbr2)
{
    if (nbr2 == 0) {
        ft_putstr("Stop : division by zero\n");
    }else
        return nbr1 /nbr2;
    return 0;
}

int ft_mod(int nbr1, int nbr2)
{
    if (nbr2 == 0) {
        ft_putstr("Stop : modulo by zero\n");
    }else
        return nbr1 % nbr2;
    return 0;
}
int ft_usage()
{
    /*nbr1 = 0;*/
    /*nbr2 = 0;*/
    ft_putstr("error : only [ - + * / % ] are accepted.\n");
    return 0;
}
