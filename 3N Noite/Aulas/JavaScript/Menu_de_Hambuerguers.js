/* Menu de lanchonete
let menu = {
    'opcao1': 'X-Burguer',
    'opcao2': 'X-Dog',
    'opcao3': 'X-Frango',
    'opcao4': 'X-Pizza'
   };
   
   // Exibir opções do menu
   for (let key in menu) {
    console.log(`Opção ${key}: ${menu[key]}`);
   }
   
   // Sortear uma opção do menu
   let sorteio = Math.floor(Math.random() * 4) + 1;
   let opcaoSorteada = 'opcao' + sorteio;
   
   // Exibir a opção escolhida
   console.log(`Opção escolhida: ${menu[opcaoSorteada]}`);
*/


//---------------------------------------------------------------------------------------------------------------------//


/* Menu da Lanchonete
var lanches = [
    "1. X-Burguer Supremo ",
    "2. Sanduíche Vegano do Chef ",
    "3. Combo Chicken Nuggets ",
    "4. Salada Caesar com Frango "
  ];
  
  // Sorteia um número entre 1 e 4 para escolher um lanche aleatoriamente
  var numeroSorteado = Math.floor(Math.random() * 4) + 1;
  
  // Exibe a opção escolhida no console
  console.log("Opção Sorteada: " + numeroSorteado);
  console.log("Lanche Escolhido: " + lanches[numeroSorteado - 1]);
*/


//---------------------------------------------------------------------------------------------------------------------//


console.log('Seja bem vindo a hamburgueria')
console.log(' X-Burguer Supremo1')
console.log('Sanduíche Vegano do Chef')
console.log('Combo Chicken Nuggets')

const opcao = Math.floor(math.random () * 4) +1;
console.log(opcao)

switch (opcao){
    case 1 :
        console.log ('Você escolheu o x-burguer supremo');
        break;
    case 2 :
        console.log ('Você escolheu o Sanduíche Vegano do Chef')
        break;
    case 3 :
        console.log ('Você escolheu 0 Combo Chicken Nuggets')
        break;
    default:
        console.log("Dia da semana errado!")
}