var data = new Date()
//console.log(data)
var today = data.getDay()
//console.log(today)

switch (today){
    case 0:
        console.log("Domingo")
        break;
    case 1:
         console.log("Segund-Feira")
        break
    case 3:
        console.log("Terça-Feira")
        break
    case 4:
        console.log("Quarta-Feira")
        break
    case 5:
        console.log("Quinta-Feira")
        break
    case 6:
        console.log("Sexta-Feira")
        break
    default:
        console.log("Dia da semana errado!")
}