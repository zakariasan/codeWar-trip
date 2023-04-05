def disarium_number(number):
    nbr  = str(number)
    score = 0
    ind = 1
    for one in nbr:
        score += int(one)**ind
        ind+=1;
    if(score == number):
        return "Disarium !!"
    return "Not !!"
# Definition
# Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.


