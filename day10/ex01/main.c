#include "./includes/libft.h"



int main(int argv, char** argc)
{ 
    if(argv == 4)
      ft_putnbr(ft_do_op(argc[1], argc[2], argc[3]));
    return 0;
}
