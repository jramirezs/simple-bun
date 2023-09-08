import { getRandomGenre } from './genrenator';

console.log('All your base are belong to us!');

const genre = await getRandomGenre();
console.log(`Now go and listen some ${genre}`);
