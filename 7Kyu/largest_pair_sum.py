def largest_pair_sum(numbers):
    nb1 = max(numbers)
    tab2 = list(filter(lambda x: x!= nb1, numbers))
    if(len(tab2) == len(numbers) - 1):
        return nb1 + max(tab2)
    return nb1 + nb1
# Given a sequence of numbers, find the largest pair sum in the sequence.

# For example

# [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
# [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
# Input sequence contains minimum two elements and every element is an integer.


