const args = process.argv.slice(2);

const beep = () => {
  process.stdout.write('\x07');
};

const systemSound = (second) => {
  if (second > 0 && !isNaN(second)) {
    setTimeout(() => {
      beep();
    }, second * 1000);
  }
};

for (const arg of args) {
  const second = Number(arg);
  systemSound(second);
}