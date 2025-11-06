const argv = process.argv.slice(2);

const first = process.argv[2];

console.log(first ?? 'No argument');