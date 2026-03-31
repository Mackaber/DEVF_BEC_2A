const fs = require('fs')

const filePath = './ejemplo.txt'

// _FileSync Lee o Escribe desde la memoria (RAM)

// Escribir a archivo
fs.writeFileSync(filePath, "Un string de ejemplo")

// Append escribe a un archivo ya exitente
fs.appendFileSync(filePath, "\nOtra linea en el mismo archivo")

// Leer a archivo (path, encoding)
const data = fs.readFileSync(filePath, 'utf8')
console.log(data)




