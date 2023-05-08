console.log("Temperature Conversion Program");
console.log("------------------------------");
console.log("1. Celsius to Fahrenheit");
console.log("2. Fahrenheit to Celsius");
const choice = parseInt(prompt("Enter your choice (1/2):"));
if (choice === 1) {
  console.log("Celsius to Fahrenheit");
  const celsius = parseFloat(prompt("Enter Celsius:"));
  const fahrenheit = (celsius * 1.8) + 32;
  console.log(`${celsius} degree Celsius = ${fahrenheit} degree Fahrenheit`);
} else if (choice === 2) {
  console.log("Fahrenheit to Celsius");
  const fahrenheit = parseFloat(prompt("Enter Fahrenheit:"));
  const celsius = (fahrenheit - 32) / 1.8;
  console.log(`${fahrenheit} degree Fahrenheit = ${celsius} degree Celsius`);
} else {
  console.log("Invalid choice. Please choose 1 or 2.");
}
