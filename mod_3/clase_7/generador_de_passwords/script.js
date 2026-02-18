const generate_btn = document.querySelector("#generate_btn")
const password_range = document.querySelector("#password_range")
const uppercase_checkbox = document.querySelector("#uppercase_checkbox")
const numbers_checkbox = document.querySelector("#numbers_checkbox")
const symbols_checkbox = document.querySelector("#symbols_checkbox")
const generated_password = document.querySelector("#generated_password")

generate_btn.addEventListener("click", () => {
    console.log("Presionaste el botón")
    const result = generate_password(
        password_range.value,
        uppercase_checkbox.checked,
        numbers_checkbox.checked,
        symbols_checkbox.checked
    )
    generated_password.innerHTML = result
})

const generate_password = (length, uppercase, numbers, symbols) => {

    console.log("Generando contraseña con las siguientes opciones:")
    console.log("Largo:", length)
    console.log("Incluir Mayusculas:", uppercase)
    console.log("Incluir Numeros:", numbers)
    console.log("Incluir Simbolos:", symbols)

    // Generado por copilot, no es necesario entenderlo, pero si quieres puedes intentarlo
    const lowercase_chars = "abcdefghijklmnopqrstuvwxyz"
    const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const number_chars = "0123456789"
    const symbol_chars = "!@#$%^&*()_+[]{}|;:,.<>?"

    // 2) Empezamos con minúsculas como base
    let available_chars = lowercase_chars

    // 3) Según los checkboxes, agregamos más caracteres a la base
    if (uppercase) {
        available_chars += uppercase_chars
    }
    if (numbers) {
        available_chars += number_chars
    }
    if (symbols) {
        available_chars += symbol_chars
    }

    // 4) Si el largo no es válido, devolvemos un texto de ayuda
    if (!length || length <= 0) {
        return "Elige un largo mayor a 0"
    }

    // 5) Creamos una variable vacía donde iremos guardando la contraseña
    let password = ""

    // 6) Repetimos "length" veces para ir agregando un carácter por vuelta
    for (let i = 0; i < length; i++) {
        // Número aleatorio entre 0 y el último índice de available_chars
        const random_index = Math.floor(Math.random() * available_chars.length)

        // Tomamos el carácter en ese índice
        const random_char = available_chars[random_index]

        // Lo añadimos al texto final
        password += random_char
    }

    // 7) Regresamos la contraseña completa
    return password
}