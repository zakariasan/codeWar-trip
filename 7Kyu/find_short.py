def find_short(s):
    # your code here
    words = s.split(' ')
    l = len(s)
    for item in words:
        if(len(item) < l):
            l = len(item)
    return l # l: shortest word length

# Simple, given a string of words, return the length of the shortest word(s).

# String will never be empty and you do not need to account for different data types.
