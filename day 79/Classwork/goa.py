
students = [
    {"name": "ლიკა", "age": 10},
    {"name": "გიორგი", "age": 12},
    {"name": "ნიკა", "age": 11},
    {"name": "ანა", "age": 13},
    {"name": "ლაშა", "age": 10},
    {"name": "ნინო", "age": 12},
]


def group_by_age(students):
    age_groups = {}
    for student in students:
        age = student["age"]
        if age not in age_groups:
            age_groups[age] = []
        age_groups[age].append(student["name"])
    return age_groups


grouped_students = group_by_age(students)
for age, names in grouped_students.items():
    print(f"{age} წლის მოსწავლეები: {', '.join(names)}")
