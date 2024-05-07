let valorMetros = prompt("Insira o valor em metros:");
let valorMetrosNum = parseFloat(valorMetros);

let valorCentimetros = valorMetrosNum * 100;

console.log("O valor em centímetros é:", (valorCentimetros).toFixed(2));