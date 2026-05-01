const { z } = require("zod");
const readline = require("node:readline/promises");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Paso 1.
const formularioSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  edad: z.coerce
    .number("Se esperaba un número")
    .int("Se esperaba un entero")
    .min(1, "La edad es obligatoria"),
  email: z.string().email(),
  cellphone: z
    .string()
    .length(10, "El celular debe tener exactamente 10 dígitos"),
});

const main = async () => {
  const nombre = await rl.question("Ingrese su nombre: ");
  const edad = await rl.question("Ingrese su edad: ");
  const email = await rl.question("Ingrese su email: ");
  const cellphone = await rl.question("Ingrese su número de celular: ");

  // Paso 2.
  const formulario = { nombre, edad, email, cellphone };
  // Equivalente a
  //const formulario = {
  //    nombre: nombre,
  //    edad: edad,
  //    email: email,
  //    cellphone: cellphone
  //}

  // Paso 3.
  const result = formularioSchema.safeParse(formulario);

  if (result.success) {
    console.log("Formulario correcto!");
  } else {
    console.log("Errores:");
    result.error.issues.forEach((e) => {
      console.log(`${e.message} en ${e.path}`);
    });
  }

  rl.close();
};

main();