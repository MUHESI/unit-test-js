const assert = require('chai').assert;
const expect = require('chai').expect;
const Courses = require('../src/data/courses.json')

describe('Testing data', () => {
    let courses = Courses;
    it('we have an array of 12 items', () => {
        expect(courses).to.have.lengthOf(12)
    })

    it('Each course should contain a number ID', () => {
        courses.map((item) => (
            assert.typeOf(item.id, 'number')
        ))
    })
})
