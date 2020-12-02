let pets = ['cat', 'dog', 'rat'];

// forloop that changes the string in each index of array to make words plural
for (let i = 0; i < 3; i++){
  pets[i] = pets[i] + 's';
}

console.log(pets);
