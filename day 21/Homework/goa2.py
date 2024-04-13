number_list = [1, 1,2,2, 3,3]
even_numbers = []

for number in number_list:
    if number % 2 == 0:
        even_numbers.append(number)

print(even_numbers)