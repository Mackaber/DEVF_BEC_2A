const fs = require('fs')
const repl = require('repl')

const leer = (filePath) => {
    const content = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(content)
}

const escribir = (filePath, obj) => {
    const obj_json = JSON.stringify(obj)
    fs.writeFileSync(filePath, obj_json)
}

const r = repl.start({ prompt: "(🤖)>" })
r.context.leer = leer
r.context.escribir = escribir