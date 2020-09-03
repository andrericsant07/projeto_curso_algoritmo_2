/*escreva ("Digite o seu nome: ")
      leia (nome)
      escreva ("Digite a sua idade: ")
      leia (idade)
      
      se (idade >=18)entao
         escreva (" você ja pode dirigir. ")
      senao
         escreva (" você ainda não tem idade suficiente para dirigir.")
      fimse
*/

var nome, idade;

nome= prompt("Digite o seu nome: ")
idade= prompt("Digite a sua idade: ")

if(idade >= 18)
    alert("Você ja pode dirigir.")
    else
    alert("Você ainda não tem idade suficiente para dirigir.")