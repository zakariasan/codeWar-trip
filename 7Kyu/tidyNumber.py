def tidyNumber(n):
    it = str(n)
    last = it[0]
    for a in it:
        print(a)
        if(a < last):
            return False
        last = a
    return True


# Task
# Given a number, Find if it is Tidy or not .

# Warm-up (Highly recommended)
# Playing With Numbers Series
# Notes
# Number passed is always Positive .

# Return the result as a Boolean

# Input >> Output Examples
# tidyNumber (12) ==> return (true)
# Explanation:
# The number's digits { 1 , 2 } are in non-Decreasing Order (i.e) 1 <= 2 .
