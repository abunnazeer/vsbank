const createUsername = function (user) {
  const username = user
    .toLowerCase()
    .split(' ')
    .map(words => words.slice(0, 2))
    .join('');
  return username;
};
console.log(createUsername('Abdullahi Ahmad Hassan'));

// console.log(user);
// console.log(username);
