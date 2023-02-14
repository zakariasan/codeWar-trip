#include "../includes/libft.h"
#include <fcntl.h>
#include <stdlib.h>
#include <unistd.h>

void ft_stdin(void)
{
    char buf;

    while(read(0, &buf,1) !=0)
        ;
}

void ft_puterror(char *str)
{
    int i;

    i = 0;
    while(str[i])
        write(2, &str[i++],1);
}

void ft_readFile(char *file)
{
    char *tmp;
    int fd;
    int i;
    int last;

    last = 0;
    fd = open(file, O_RDONLY);
    tmp  = (char *)malloc(sizeof(char));
    while(read(fd, &tmp[i],1))
    {
        i++;
    }   
    tmp[i] = 0;
    while (--i > 0 && last < 10)
    {
        if(tmp[i] == '\n')
            last++;
    }
    ft_putstr(&tmp[i]);

}

void  ft_tail(int ac , char **fparam)
{
    int fd;
    int i;

    if(ac < 2 || fparam[1][0] == '-')
    {
        ft_stdin();
    }
    i = 1;
    while(i < ac)
    { 
        fd = open(fparam[i], O_RDONLY);
        if(fd < 0)
        {
            ft_puterror("ft_tail: cannot open  \'");
            ft_puterror(fparam[i]);
            ft_puterror("\' for reading : No such file or directory\n");
        }else {
            ft_putstr("hello from, ft_tail .............................\n");
            ft_readFile(fparam[i]);
        }
        if(close(fd) == -1)
            write(2, "close : error()\n", 16);
        i++;
    }
}
