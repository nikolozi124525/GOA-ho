def no_space(x):
    result = ''
    for char in x:
        if char != ' ':
            result += char
    return result