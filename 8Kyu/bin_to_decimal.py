def bin_to_decimal(n):
    n =int(n)
    decimal = 0
    power = 1
    while int(n)>0:
        rem = n%10
        n = n//10
        decimal += rem*power
        power = power*2
        
    return decimal


# Complete the function which converts a binary number (given as a string) to a decimal number.
