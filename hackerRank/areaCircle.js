const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  const PI = Math.PI;

  rl.question("Introduce el radio del círculo: ", (input) => {
    const r = parseFloat(input);

    const area = PI * r * r;
    const perimeter = 2 * PI * r;

    console.log("El area del circulo es", area); // Imprimir el área
    console.log("El perimetro del circulo es", perimeter); // Imprimir el perímetro

    rl.close();
  });
}

main();
