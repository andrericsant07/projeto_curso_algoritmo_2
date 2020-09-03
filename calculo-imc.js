/*altura, peso, imc: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      escreva ("Digite a sua peso: Kg")
      leia (peso)
      escreva ("Digite o seu altura: m")
      leia (altura)
      //imc := peso / (altura ^ 2)
      imc := peso / (altura * altura)
      escreval ("O seu imc é ",imc:5:2)

      se (imc >= 18.5 ) e (imc <= 25)entao
         escreval ("Você está no peso certo.")
      senao
         escreval ("Você está abaixo do peso.")
      fimse
*/

var altura, peso, imc;

peso= prompt("Digite o seu peso: ")
altura= prompt("Digite a sua altura: ")

imc= peso / (parseInt(altura) * parseInt(altura))
alert("O seu imc é " + imc)

    if((imc >= 18.5) && (imc <= 25))
        alert("Você está no peso certo.")
        else
        alert("Você está abaixo do peso.")
