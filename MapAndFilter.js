const people = [
    {
        name:'bill',
        age: 30,
        occupation:'developer'
    },
    {
        name:'mike',
        age: 33,
        occupation:'developer'
    },
    {
        name:'jane',
        age: 25,
        occupation:'developer'
    },
    {
        name:'michelle',
        age: 36,
        occupation:'developer'
    }
]

people.map(person => (person.name + " skwowdm"));

people.filter(person => (person.age > 40));
