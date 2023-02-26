def cube_odd(arr):
    if any(type(x) is not int for x in arr):
        return None
    return sum(x ** 3 for x in arr if x % 2 != 0)


# Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined/None/nil/NULL if any of the values aren't numbers.

# Note: Booleans should not be considered as numbers.


