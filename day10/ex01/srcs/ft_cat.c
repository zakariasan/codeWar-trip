#include "../includes/libft.h"
#define BUF_SIZE 10

void ft_stdin(void)
{
    char buf;

    while(read(0, &buf,1) !=0)
        write(1,&buf,1);
}

void ft_puterror(char *str)
{
    int i;

    i = 0;
    while(str[i])
        write(2, &str[i++],1);
}

int  ft_cat(int ac , char **fparam)
{
    int fd;
    char buf;
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
            ft_puterror("ft_cat:");
            ft_puterror(fparam[i]);
            ft_puterror(": No such file or directory\n");
        }else {
        while (read(fd, &buf, 1))
            write(1,&buf,1);
        }
        if(close(fd) == -1)
            write(2, "close : error()\n", 16);
        i++;
    }
    return 1;
}
