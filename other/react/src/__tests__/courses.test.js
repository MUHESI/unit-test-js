import courses from '../data/courses.json'

test('we have an array of 12 items', () => {
    expect(courses.length).toBe(12)

})

test('Each course should have a number ID', () => {
    courses.map((item) => {
        expect(typeof item.id)
    })

})