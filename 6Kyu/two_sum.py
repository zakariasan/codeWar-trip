def two_sum(numbers, target):
    print(numbers, target)
    list  = numbers
    for nbr in numbers:
        for nb in list:
            if( numbers.index(nbr)!= numbers.index(nb)):
                if(nb + nbr == target ):
                    return [numbers.index(nbr), numbers.index(nb)]
            
