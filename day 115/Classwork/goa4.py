def categorize_members(members):
    result = []
    for age, handicap in members:
        if age >= 55:
            result.append("Senior")
        else:
            result.append("Open")
    return result
