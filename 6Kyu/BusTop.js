//Descreption :Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

//Take a look on the test cases.

const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)
