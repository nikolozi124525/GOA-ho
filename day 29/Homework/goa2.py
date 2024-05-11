def square_digits(num):
    result = ''
    
    for char in str(num):
        result += str(int(char) ** 2)
    
    return int(result)
x = lambda y: y * 2 print(x(2))