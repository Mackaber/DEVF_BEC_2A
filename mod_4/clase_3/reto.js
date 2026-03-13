const avengers = [
  {
    name: "Iron Man",
    age: 48,
    movies: ["Iron Man", "The Avengers", "Avengers: Endgame"],
  },
  {
    name: "Captain America",
    age: 101,
    movies: [
      "Captain America: The First Avenger",
      "The Avengers",
      "Avengers: Endgame",
    ],
  },
  {
    name: "Thor",
    age: 1500,
    movies: ["Thor", "The Avengers", "Avengers: Endgame"],
  },
  {
    name: "Black Widow",
    age: 35,
    movies: ["Iron Man 2", "The Avengers", "Avengers: Endgame"],
  },
];

// 1. En el arreglo se enecuentra Iron Man?...

const incluyeIronMan = avengers.some(elemento => elemento.name == "Iron Man")
console.log(incluyeIronMan)

// 2. Si existe Thor en Movies...
let character = {
    name: "Thor",
    age: 1500,
    movies: ["Thor", "The Avengers", "Avengers: Endgame"],
}
let incluyeThor = character.movies.includes("Thor")
console.log(incluyeThor)

incluyeThor = avengers.some((character) => character.movies.includes("Thor"))
console.log(incluyeThor)

// Cual es el avenger más viejo?
let character1 = {
    name: "Thor",
    age: 1500,
    movies: ["Thor", "The Avengers", "Avengers: Endgame"],
}

let character2 = {
    name: "Captain America",
    age: 101,
    movies: [
        "Captain America: The First Avenger",
        "The Avengers",
        "Avengers: Endgame",
    ],
}
// character1 es mayor que character2?
console.log(character1.age > character2.age)



let max = avengers.reduce((anteriorCharacterEdad,character) => {
    if(anteriorCharacterEdad.age > character.age) {
        return anteriorCharacterEdad
    } else {
        return character
    }
})

console.log(max.name)

max = avengers.reduce((anteriorCharacterEdad,character) => 
    anteriorCharacterEdad.age > character.age ? anteriorCharacterEdad : character
)
