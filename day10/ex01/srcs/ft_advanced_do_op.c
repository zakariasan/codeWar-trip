#include "../includes/libft.h"
#include "../includes/ft_oop.h"




int ft_advanced_do_op(char *nbr1, char *op, char *nbr2)
{
    int n1;
    int n2;
    int i;

    n1 = ft_atoi(nbr1);
    n2 = ft_atoi(nbr2);
    /*i = ft_getOp(op);*/

    i = 0; 
    while (i < 5) {
        if(op[0] == gl_opptab[i].str[0])
            return gl_opptab[i].out(n1, n2);

        i++;
    }
    
    return gl_opptab[i].out(n1, n2);

}

int ft_getOp(char *operator)
{
    int i;

    i = 0;
    while(i < 5){
        
        if(ft_strcmp(operator, gl_opptab[i].str) == 0)
        {
                       return i;
        }
        i++;
    }
    return -1;
}
