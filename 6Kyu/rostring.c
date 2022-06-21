/*Assignment name  : rostring*/
/*Expected files   : rostring.c*/
/*Allowed functions: write, malloc, free*/
/*--------------------------------------------------------------------------------*/
/*Write a program that takes a string and displays this string after rotating it*/
/*one word to the left.*/
/*Thus, the first word becomes the last, and others stay in the same order.*/

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
    int j;
    char **str;

    if(ac == 2)
    {
        i = 0;
        str = ft_split(av[1]);
        while(str[i])
            i++;
        j = 1;
        while( j < i && str[j])
        {
            ft_putstr(str[j++]);
			ft_putstr(" ");
        }
        ft_putstr(str[0]);
        free(str);
    }
        write(1, "\n",1);
    return (0);
}
