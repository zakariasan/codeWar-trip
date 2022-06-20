/*Assignment name  : rev_wstr*/
/*Expected files   : rev_wstr.c*/
/*Allowed functions: write, malloc, free*/
/*--------------------------------------------------------------------------------*/

/*Write a program that takes a string as a parameter, and prints its words in*/
/*reverse order.*/
/*Examples:*/

/*$> ./rev_wstr "le temps du mepris precede celui de l'indifference" | cat -e*/
/*l'indifference de celui precede mepris du temps le$*/
/*$> ./rev_wstr "abcdefghijklm"*/
/*abcdefghijklm*/
/*$> ./rev_wstr "il contempla le mont" | cat -e*/
/*mont le contempla il$*/
/*$> ./rev_wstr | cat -e*/
/*$*/
/*$>*/





#include <unistd.h>
#include <stdlib.h>
void ft_putchar(char c)
{
	write(1, &c, 1);
}
void ft_putstr(char *str)
{
	int i;

	i = 0;
	while(str[i])
	{
		ft_putchar(str[i++]);
	}
}
char		**ft_split(char *str)
{
	int		i;
	int		j;
	int		k;
	char	**split;

	i = 0;
	k = 0;
	if (!(split = (char **)malloc(sizeof(char *) * 256)))
		return (NULL);
	while (str[i] == ' ' || str[i] == '\t' || str[i] == '\n')
		i += 1;
	while (str[i])
	{
		j = 0;
		if (!(split[k] = (char *)malloc(sizeof(char) * 4096)))
			return (NULL);
		while (str[i] != ' ' && str[i] != '\t' && str[i] != '\n' && str[i])
			split[k][j++] = str[i++];
		while (str[i] == ' ' || str[i] == '\t' || str[i] == '\n')
			i += 1;
		split[k][j] = '\0';
		k += 1;
	}
	split[k] = NULL;
	return (split);
}

int main(int ac, char **av)
{
    int i;
    char **str;

    if(ac == 2)
    {
        str = ft_split(av[1]);
        i = 0;
        while(str[i])
            i++;
        while(--i >= 0)
        {
            ft_putstr(str[i]);
			i == 0 ? : ft_putstr(" ");
        }
        free(str);
    }
        write(1, "\n",1);
    return (0);
}
