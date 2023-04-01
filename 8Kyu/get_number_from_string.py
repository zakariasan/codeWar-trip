def get_number_from_string(string):
    count = 0
    for item in string:
        if(item.isdigit()):
            count= count*10 + int(item)
    return count



# Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

# Function:

# getNumberFromString(s)
