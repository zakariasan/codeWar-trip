import math
def diamond(n):
    if n > 0 and n % 2 == 1:
        diamond = ""
        for i in range(n):
            if(int(math.floor((n/2) - i)) >= 0):
                spaces = int(math.floor((n/2) - i))
            else:
                spaces = -1 * int(math.floor((n/2) - i))
            diamond += " " * spaces
            diamond += "*" * (n - abs((n-1) - 2 * i))
            diamond += "\n"
        return diamond
    else:
        return None

# Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.

# Task
# You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

# Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

# Examples
# A size 3 diamond:
