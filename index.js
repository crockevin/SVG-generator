const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        message: 'Enter 3 characters or less',
        name: 'text',
        validate: input => (input.length > 3) ? 'Please enter 3 characters or less' : true
    },
    {
        type: 'input',
        message: 'Enter a color for the text',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Choose a shape',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape'
    },
    {
        type: 'input',
        message: 'Enter a color for the shape',
        name: 'shapeColor'
    }
]

function makeSvg(text, textColor, shape, shapeColor){
    switch (shape) {
        case 'circle':
            const newCircle = new Circle(text, textColor, shapeColor)
            return newCircle.render()
            break;
        case 'triangle':
            const newTriangle = new Triangle(text, textColor, shapeColor)
            return newTriangle.render()
            break;
        case 'square':
            const newSquare = new Square(text, textColor, shapeColor)
            return newSquare.render()
            break;
    }
}

function start() {
    inquirer.prompt(questions)
        .then((answers) => {
            const { text, textColor, shape, shapeColor } = answers
            const svg = makeSvg(text, textColor, shape, shapeColor)
            fs.writeFile('./examples/logo.svg', svg, (err) => {
                if(err){
                    console.log(err)
                }
                console.log('good')
            })
        })
}


start()