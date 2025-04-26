def tribonacci(signature, n):
    if n == 0:
        return []
    if n <= 3:
        return signature[:n]
    
    result = signature[:]
    while len(result) < n:
        next_val = result[-1] + result[-2] + result[-3]
        result.append(next_val)
    
    return result
