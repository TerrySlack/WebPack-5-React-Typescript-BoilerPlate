// Import the data
const data = require('../../../mockData');

// set a context to stop having self all over the place
const ctx = self;

// Fake an api call
const getData = async () => {
  // Use a promise to fake the call and return the data
  const resolvedData = await new Promise((resolve) => resolve(data));
  return resolvedData;
};

ctx.addEventListener('message', async () => {
  const data = await getData();
  ctx.postMessage(data);
});
