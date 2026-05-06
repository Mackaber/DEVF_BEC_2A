import repl from 'repl';
const cards = [
    { name: 'Mackaber', description: 'Hola, soy un card', time: 'hace 5 minutos' },
    { name: 'Alice', description: 'Hola, soy Alice', time: 'hace 10 minutos' },
    { name: 'Bob', description: 'Hola, soy Bob', time: 'hace 15 minutos' },
    { name: 'Charlie', description: 'Hola, soy Charlie', time: 'hace 20 minutos' }
];

const r = repl.start('> ');

r.context.cards = cards;