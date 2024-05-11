def digitize(n):
    nums = []
    n = str(n)
    n = n[::-1]
    
    for i in n:
        nums.append(int(i))
    
    return nums