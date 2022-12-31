#include "../includes/libft.h"

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
