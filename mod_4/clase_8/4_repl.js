const repl = require('repl')

const suma = (a, b) => {
    return a + b
} 

// 1. Iniciar el repl
const r = repl.start({ prompt: "(🤖)>" })

// 2. Incluir las funciones a utilizar en mi repl
r.context.suma = suma 