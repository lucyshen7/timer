let alarms = process.argv.slice(2).sort((a,b) => a - b);

for (const alarm of alarms) {
  let num = Number(alarm); // convert CLI argument to number
  if (num > 0 && (typeof num === "number")) {
    setTimeout(() => {
      process.stdout.write('.');
    }, num * 1000);
  }
}

setTimeout(() => {
  process.stdout.write('\n');
}, alarms[alarms.length - 1] * 1000);
