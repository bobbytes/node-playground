Promise.resolve(1)
  .then((x) => {
    return x + 1;
  })
  .then((x) => {
    throw new Error('My Error');
  })
  .catch(() => {
    return 1;
  })
  .then((x) => {
    return x + 1;
  })
  .then((x) => {
    return console.log(x);
  })
  .catch(error => {
    console.error(error);
  });
