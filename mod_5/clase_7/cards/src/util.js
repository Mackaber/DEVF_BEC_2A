// Varias funciones que no necesian utilizarse siempre.

const capitalizeName =  (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
}

const minutesToHours = (minutes) => {
    return Math.floor(minutes / 60);
}

const colorChange = (input, color) => {
    input.style.color = color;
}

export { capitalizeName, minutesToHours, colorChange }