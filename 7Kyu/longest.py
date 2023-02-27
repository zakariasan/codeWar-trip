def longest(a1, a2):
    str = ''
    for i in  "abcdefghijklmnopqrstuvwxyz":
        print(a1.find(i), a2.find(i))
        if(a1.find(i) !=-1 or a2.find(i)!=-1 ):
            str+=i
    return str



# def longest(a1, a2):
    # return "".join(sorted(set(a1 + a2)))


    # Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

# Examples:
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
