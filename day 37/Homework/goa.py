def spot_diff(s1, s2):
    if s1 == s2:
        return []
    
    difference_indexes = []
    
    for index in range(len(s1)):
        if s1[index] != s2[index]:
            difference_indexes.append(index)
    
    return difference_indexes