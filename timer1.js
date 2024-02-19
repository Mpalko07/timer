const args = process.argv.slice(2);

const beep = () => {
  process.stdout.write('\x07');
};

const setTimer = (time) => {
  if (time > 0 && !isNaN(time)) {
    setTimeout(() => {
      beep();
    }, time * 1000);
  }
};

for (const arg of args) {
  const time = Number(arg);
  setTimer(time);
}