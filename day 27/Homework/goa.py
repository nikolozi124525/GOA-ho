def sum_of_numbers(numbers_list):
    total = 0
    
    for i in numbers_list:
        total = total + i
        
    return total
    
var1 = sum_of_numbers([1, 2, 3, 4, 5])
print(var1)

var2 = sum_of_numbers([6, 7, 8, 9, 10])
print(var2)