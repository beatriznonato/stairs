let escada = Number(prompt("Insira o número de degraus para a escada:"));
let formato = prompt("Insira o formato da escada:");
let degrau = formato;
let i= 1;

while(i <= escada){
    console.log(degrau);
    degrau = degrau + formato; //concatenação
    i = i+1;
}