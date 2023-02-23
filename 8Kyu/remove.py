def remove(s):
    i = -1
    while s[i] == '!':
        i-=1
    if(i == -1):
        return s
    return s[:i+1]
        

# Description:
# Remove all exclamation marks from the end of sentence.

# Examples
# remove("Hi!") === "Hi"
# remove("Hi!!!") === "Hi"
# remove("!Hi") === "!Hi"
# remove("!Hi!") === "!Hi"
# remove("Hi! Hi!") === "Hi! Hi"
# remove("Hi") === "Hi"
