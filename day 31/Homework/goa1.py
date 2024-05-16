def separate_evens_odds(numbers):
    result = []
    for number in numbers:
        if number % 2 == 0:
            result.append(number // 2)
        else:
            result.append(number * 2)
    return result


print(separate_evens_odds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))