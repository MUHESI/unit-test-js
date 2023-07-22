const app = require('../app');

describe('palidrom', () => {
    it('It should retreive a sentence', () => {
        expect(app.sentence.length).toBeGreaterThan(0);
    })

    it('should have a length of 11 caracts', () => {
        expect(app.sentence.length).toEqual(11)
    })
    it('should be a palidrom', () => {
        expect(app.isPaladrom('kayak')).toEqual(true)
    })
    it('should NOT be a palidrom', () => {
        expect(app.isPaladrom('azerty')).toEqual(false)
    })
})