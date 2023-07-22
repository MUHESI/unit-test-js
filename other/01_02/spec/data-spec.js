const Courses = require('../src/data/courses.json')

describe('Testing data', () => {
    let courses = Courses;
    it('we have an array of 12 courses', () => {
        expect(courses.length).toBe(12)
    })

    it('should be react', () => {
        expect(courses[0].category).toMatch('Angular')
    })
})


