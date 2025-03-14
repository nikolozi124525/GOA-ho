def elevator_distance(floors):
    total_distance = 0

    for i in range(1, len(floors)):
        total_distance += abs(floors[i] - floors[i - 1])
    
    return total_distance
