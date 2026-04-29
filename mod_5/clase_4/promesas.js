// Ejemplo de promesa simulada

const mipromesa = new Promise((resolve, reject) => {
    if(false) {
        resolve("Todo en orden!")

    } else {
        reject("Todo mal!")
    }
})

console.log(mipromesa)

mipromesa
    .then(response => console.log(response))
    .catch(error => console.error(error))


// Ejemplo de promesa simulada con pending

const mipromesa_sim = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(Math.random() > 0.5) {
            resolve("Todo en orden!")
        } else {
            reject("Todo mal!")
        }
    },5000) // tiempo en milisegundos
})

console.log(mipromesa_sim)

mipromesa_sim
    .then(response => console.log(response))
    .catch(error => console.error(error))



// Ejemplo de promesa simulada reject y resolve "al mismo tiempo"

const mipromesa_sim_sim = new Promise((resolve, reject) => {
    reject("Todo mal!")
    resolve("Todo en orden!")
})

mipromesa_sim_sim
    .then(response => console.log(response))
    .catch(error => console.error(error))


// Promesas encadenadas simuladas

const mipromesa_enc = new Promise((resolve_out, reject_out) => {
  resolve_out(
    new Promise((resolve_in, reject_in) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve_in("Todo en orden!");
        } else {
          reject_in("Todo mal!");
        }
      }, 5000); // tiempo en milisegundos
    }),
  );
});

mipromesa_enc
  .then((response_out) => {
    console.log(response_out);
    return response_out;
  })
  .then((response_in) => console.log(response_in));

 const promesa1 = new Promise((resolve, reject) => {
    //...
 })

 const promesa2 = new Promise((resolve, reject) => {
    //...
 })

 Promise.all([promesa1, promesa2], (promesas) => {

 })