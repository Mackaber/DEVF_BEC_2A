const fs = require('fs')

const filePath = './ejemplo.json'

const obj = {
    name: "Mackaber",
    age: 34,
    profession: "programmer"
}

// Escribir mi json en un archivo
const obj_json = JSON.stringify(obj)
console.log(obj_json)
fs.writeFileSync(filePath, obj_json)

// Leer mi archivo de json
const file_content = fs.readFileSync(filePath, 'utf8')
const file_obj = JSON.parse(file_content)
console.log(file_obj)

// escribir de nuevo
file_obj.age = file_obj.age + 1 // file_obj.age++
const file_obj_json = JSON.stringify(file_obj)
fs.writeFileSync(filePath, file_obj_json)
