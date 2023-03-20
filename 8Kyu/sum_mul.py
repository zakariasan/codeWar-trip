def sum_mul(n, m):
    print(n,m)
    if(n < m and n>0 ):
        step = 0
        load = n
        while(load<m):
            step = step + load
            load+=n
        return step
    elif(n == 0 or m == 0 or n<0 or m<0) :
        return 'INVALID'
    else:
        return 0

#     Your Job
# Find the sum of all multiples of n below m

# Keep in Mind
# n and m are natural numbers (positive integers)
# m is excluded from the multiples
# Examples
# sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
# sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
# sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
# sumMul(4, -7)  ==> "INVALID"
