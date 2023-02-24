def get_size(w, h, d):
    area = 2*(w*h + h*d + w*d)
    volume = w*h*d
    return [area, volume]


# Write a function that returns the total surface area and volume of a box as an array: [area, volume]

