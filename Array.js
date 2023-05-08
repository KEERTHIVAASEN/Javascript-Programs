let my_array = [1, 2, 3, 4, 5];

console.log(my_array);

console.log(my_array[2]);

my_array[2] = 6;

my_array.push(7);

my_array.splice(3, 0, 8);

let last_element = my_array.pop();

my_array.splice(my_array.indexOf(8), 1);

console.log(my_array);