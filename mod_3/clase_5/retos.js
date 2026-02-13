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

// Acceder a la segunda película de Thor
console.log(avengers[2].movies[1]);

const rocky_movies = {
  Rocky: {
    year: 1976,
    director: "John G. Avildsen",
  },
  "Rocky II": {
    year: 1979,
    director: "Sylvester Stallone",
  },
  "Rocky III": {
    year: 1982,
    director: "Sylvester Stallone",
  },
};

// Obtener el año de grabación de Rocky III
console.log(rocky_movies["Rocky III"].year);

const tierra = {
  continentes: {
    America: {
      Mexico: {
        estados: ["CDMX", "Guadalajara", "Monterrey", "SLP"],
      },
      "Estados Unidos": {
        estados: ["California", "Texas", "Florida", "New York"],
      },
    },
    Europa: {
      España: {
        ciudades: ["Madrid", "Barcelona", "Valencia", "Sevilla"],
      },
      Francia: {
        ciudades: ["París", "Lyon", "Marsella", "Niza"],
      },
    },
  },
  contintentes() {
    continentes_list = []
    for (continente in this.continentes) {
        continentes_list.push(continente)
    }
    console.log(`Continentes: ${continentes_list}`)

    return 
    //console.log(`Continentes: ${Object.keys(this.continentes)}`)
  },

  paises() { continentes_list
        for (pais in this.paises()) {
        
        }   
  },

  estados() {
    for(pais in this.paises()) {
        pais.estados
    }
  },

  ciudades() {
    for (continente in this.continentes) {
        for (pais in this.continente) {
            pais["estados"]
        }   
    }
  },
};

// Imprimir de la siguiente forma

// Continentes: America, Europa
// Paises: Mexico, Estados Unidos, ...
// Estados: CDMX, Guadalajara..
// Ciudades: Madrid, Barcelona...

tierra.contintentes();
tierra.paises();
tierra.estados();
tierra.ciudades();
