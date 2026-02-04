// igualdad débil ==
console.log("1 == 1", 1 == 1);
console.log("0 == \"\"", 0 == ""); // Da true, aunque no sea el mismo tipo de dato.

// igualdad estricta ===
console.log("1 === 1", 1 === 1);
console.log("0 === \"\"", 0 === ""); // Revisa que sea el mismo tipo de dato

// desigualdad débil !=
console.log("1 != 2", 1 != 2);
console.log("undefined != null", undefined != null); // Da false, porque es un tipado débil

// desigualdad estricta !==
console.log("1 !== 2", 1 !== 2);
console.log("undefined !== null", undefined !== null); // Da false, porque es un tipado débil

// Mayor que >
console.log("3 > 2", 3 > 2);
console.log("1 > 1", 1 > 1);

// Menor que <
console.log("1 < 5", 1 < 5);

// Mayor o igual que >=
console.log("1 >= 1", 1 >= 1);

// Menor o igual que >=
console.log("1 <= 1", 1 <= 1);