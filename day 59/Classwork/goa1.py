def move_zeros(array):
    original_array = array[:]
    num_items_moved = 0

    for index, item in enumerate(original_array):
        try:
            if int(item) == 0 and not (item is False):
                value = int(array.pop(index - num_items_moved))
                array.append(value)
                num_items_moved += 1
        except Exception as exception:
            continue

    return array