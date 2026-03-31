const fs = require('fs')

const filePath = './ejemplo.json'

let person

const leer = () => {
    const content = fs.readFileSync(filePath, 'utf8')
    person = JSON.parse(content)
}

const escribir = () => {
    const person_json = JSON.stringify(person)
    fs.writeFileSync(filePath, person_json)
}

// Leer
leer()
// Escribir
person.age = person.age + 1
escribir()
// Leer
leer()