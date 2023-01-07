#ifndef __FT_OPP_H__
# define __FT_OPP_H__
#include "./libft.h"

t_opp gl_opptab[] =
{
{"-", &ft_sub},
{"+", &ft_add},
{"*", &ft_mul},
{"/", &ft_div},
{"%", &ft_mod},
{"", &ft_usage}
};
#endif /* __FT_OPP_H__ */
