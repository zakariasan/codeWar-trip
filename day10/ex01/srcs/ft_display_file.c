#include "../includes/libft.h"
#define BUF_SIZE 10

void ft_display_files(int ac , char **fparam)
{
    int fd;
    int ret;
    char buf[BUF_SIZE];

    if(ac == 1)
    {
        write(2,"File name missing.\n",19);
    }
    else if (ac > 2) 
    {
        write(2,"Too many arguments.\n",21);
    }else {
        fd = open(fparam[1], O_RDONLY);
        if(fd == -1)
            write(2, "open : error()\n", 15);
        while ((ret = read(fd, buf, BUF_SIZE))) 
        {
            buf[ret] = 0;
            ft_putstr(buf);
        }

        if(close(fd) == -1)
            write(2, "close : error()\n", 16);

    }



}
