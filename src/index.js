const messages = [
  'Oscar',
  'Austin',
  'Nicolas',
  'Diego',
  'Fabricio',
  'Kelly',
  'Carlos',
  'Adaya'
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg }