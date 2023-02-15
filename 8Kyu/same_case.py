def same_case(a, b):
    print(a,b)
    if(((a >= 'A' and a<= 'Z') and (b>= 'A' and b<= 'Z' )) or ((a >= 'a' and a<= 'z') and (b>= 'a' and b<= 'z' ))):
        return 1
    if((a >= 'A' and a<= 'Z') and (b>= 'a' and b<= 'z' ) 
            or (a >= 'a' and a<= 'z') and (b>= 'A' and b<= 'Z' ) 
           ):
        return 0
    return -1



# Write a function that will check if two given characters are the same case.

# If either of the characters is not a letter, return -1
# If both characters are the same case, return 1
# If both characters are letters, but not the same case, return 0
# Examples
# 'a' and 'g' returns 1

# 'A' and 'C' returns 1

# 'b' and 'G' returns 0

# 'B' and 'g' returns 0

# '0' and '?' returns -1
