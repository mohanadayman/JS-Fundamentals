const argv = process.argv.slice(2);
const num = parseInt(argv[2], 10);

if (Number.isNaN(num)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${num}`);
}