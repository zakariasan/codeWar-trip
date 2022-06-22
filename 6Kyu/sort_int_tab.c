/*Assignment name  : sort_int_tab*/
/*Expected files   : sort_int_tab.c*/
/*Allowed functions:*/
/*--------------------------------------------------------------------------------*/
/*Write the following function:*/
/*It must sort (in-place) the 'tab' int array, that contains exactly 'size'*/
/*members, in ascending order.*/

void sort_int_tab(int *tab, unsigned int size)
{
    unsigned int    i;
    unsigned int    j;
    int             tmp;

    i = 0;
    while(i < size - 1)
    {
        j = i ;
        while(j < size)
        {
            if(tab[i] > tab[j])
            {
                tmp = tab[i];
                tab[i] = tab[j];
                tab[j] = tmp;
            }
            j++;
        }
        i++;
    }
}
