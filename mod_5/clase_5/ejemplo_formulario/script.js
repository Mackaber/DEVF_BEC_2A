// const axios = require('axios') // require es Especifico de node!
const product_form = document.querySelector("#product_form")
const validation_form = document.querySelector("#validation_form")

var my_var

product_form.addEventListener('submit', async (event) => {
    event.preventDefault()

    console.log("Se presionó submit!")
    console.log(event)

    my_var = event

    let { ID, Product, Price, Qty } =  my_var.target
    const form_values = {
        ID: ID.value,
        Product: Product.value,
        Price: Price.value, 
        Qty: Qty.value
    }

    await axios.post("https://sheetdb.io/api/v1/vudlx107qfq4j", form_values)
})

validation_form.addEventListener('submit', (event) => {
    event.preventDefault()

    let { name, phone, email } = event.target
        
    /* De forma burda (sin expresiones regulares)
    let valid = true
    valid &= !name.value.includes("0")
    valid &= !name.value.includes("1")
    valid &= !name.value.includes("2")
    valid &= !name.value.includes("3")
    valid &= !name.value.includes("4")
    valid &= !name.value.includes("5")
    valid &= !name.value.includes("6")
    valid &= !name.value.includes("7")
    valid &= !name.value.includes("8")
    valid &= !name.value.includes("9")
    */

    // Regla para nombres: únicamente palabras, sin números ni símbolos
    if(!name.value.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)) {
        alert("El nombre no puede contener numeros ni simbolos")
    }

    // Regla para el telefono: Tiene que estar en formato +52 (444) 190 5214
    if(!phone.value.match(/^\+52 \(\d{3}\) \d{3} \d{4}$/)) {
        alert("El teléfono no tiene el formato correcto (+52 (444) 190 5214)")
    }

    // Regla para el email: Tiene que estar en formato válido
    if(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert("El email no tiene el formato correcto")
    }

    console.log("El formulario fue enviado satisfactoriamente!")
}) 