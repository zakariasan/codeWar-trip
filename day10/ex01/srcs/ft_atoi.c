#include "../includes/libft.h"

int ft_atoi(const char *str)
{
    int out;
    int neg;

    neg = 1;
    out = 0;
    while(*str && *str <= ' ')
        str++;
    if(*str == '-')
        neg= -1;
    if(*str == '-' || *str == '+')
        str++;
    while(*str && *str >= '0' && *str <= '9')
    {
        out = out * 10 + (*str - '0');
        str++;
    }
    return out * neg;
}
