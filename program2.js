let sum = 0;
for (var i = process.argv.length - 1; i >= 2; i--)	sum = sum + Number(process.argv[i]);
console.log(sum);