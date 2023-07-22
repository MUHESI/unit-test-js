const Courses = require('../src/data/courses.json')
describe('Testing Component', () => {
    let courses = Courses
    it('expect each to have a number ID', () => {

        courses.map((item) => {
            expect(item.id).toEqual(jasmine.any(Number))
        })

    })
})