const messages = [
  'Oscar',
  'Luz',
  'Nicolas',
  'Diego',
  'Gerson',
  'Lee',
  'Kenny',
  'Fred'
];

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
}

module.exports = { randomMsg }