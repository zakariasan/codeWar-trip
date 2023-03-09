def nth_smallest(arr, pos):
    my_list = arr
    for i in range(len(my_list)):
        for j in range(i + 1, len(my_list)):
            if my_list[i] > my_list[j]:
                my_list[i], my_list[j] = my_list[j], my_list[i]
    return my_list[pos-1]


# Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series

# Task
# Given an array/list of integers, find the Nth smallest element in the array.

# Notes
# Array/list size is at least 3.
# Array/list's numbers could be a mixture of positives , negatives and zeros.
# Repetition in array/list's numbers could occur, so don't remove duplications.
