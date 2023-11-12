const { Circle, Triangle, Square } = require('./shapes')

describe('Circle', () => {
    it('make a circle svg file wit the text "testing", the text color "red", and the shape color "white"', () => {
        const newCircle = new Circle('testing', 'red', 'white')
        const testSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="white" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red" font-size="16">
              testing
            </text>
          </svg>`
        expect(newCircle.render()).toEqual(testSvg)
    })
})
describe('Triangle', () => {
    it('make a square svg file wit the text "testing", the text color "red", and the shape color "white"', () => {
        const newTriangle = new Triangle('testing', 'red', 'white')
        const testSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <polygon points="50,10 90,90 10,90" stroke="black" stroke-width="3" fill="white" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red" font-size="16">
              testing
            </text>
          </svg>`
        expect(newTriangle.render()).toEqual(testSvg)
    })
})
describe('Square', () => {
    it('make a square svg file wit the text "testing", the text color "red", and the shape color "white"', () => {
        const newSquare = new Square('testing', 'red', 'white')
        const testSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <rect width="80" height="80" x="10" y="10" stroke="black" stroke-width="3" fill="white" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="red" font-size="16">
              testing
            </text>
          </svg>`
        expect(newSquare.render()).toEqual(testSvg)
    })
})
