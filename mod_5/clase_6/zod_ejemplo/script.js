// Como require, pero cuando hacemos uso de module
import { z } from 'https://unpkg.com/zod@3.22.4/lib/index.mjs'; 
const user_form = document.querySelector("#user_form")

const error_campos = {
    nombre: document.querySelector("#nombre_error"),
    edad: document.querySelector("#edad_error"),
    email: document.querySelector("#email_error"),
    celular: document.querySelector("#celular_error")
}  

user_form.addEventListener("submit", (event) => {
    event.preventDefault()

    // Paso 1. Definir Schema
    const formularioSchema = z.object({
        nombre: z
                .string()
                .min(1, "El nombre es requerido")
                .max(20, "El nombre no puede contener más de 20 caracteres"), // Especificando el tipo de dato
        edad: z
               .coerce
               .number("Se esperaba un número")
               .int("Se esperaba un entero")
               .min(1, "La edad es obligatoria"), // coerce convierte de string a number
        email: z.string().email(), // Especificar el subtipo de dato
        celular: z
                  .string()
                  .regex(/^\+52 \(\d{3}\) \d{3} \d{4}$/, "El teléfono no tiene el formato correcto (+52 (444) 190 5214)")
    })

    // Paso 2. Extraer los valores del formulario
    const { nombre, edad, email, celular } = event.target

    const user = {
        nombre: nombre.value,
        edad: edad.value, // Number(edad.value) 
        email: email.value,
        celular: celular.value
    }

    // Paso 3. Parsear los valores del formulario con el schema.
    const result = formularioSchema.safeParse(user) // Schema.safeParse(objeto_formulario)

    console.log(result)

    if(result.success){
        console.log("Se envió el formulario correctamente!")
    } else {
        console.log("Errores:")
        console.log(result.error)
        
        // Forma burda (con alerts)
        //result.error.issues.forEach((e) => {
        //    alert(e.message)
        //})

        result.error.issues.forEach(e => {
            const path = e.path[0]

            error_campos[path].innerHTML = e.message
            error_campos[path].style = "display:block;color:red;"
        });
    }

})