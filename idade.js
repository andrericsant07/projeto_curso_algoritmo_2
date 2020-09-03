/*anoAtual, anonasci, idade: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      escreva ("Em que ano estamos ? ")
      leia (anoAtual)
      escreva ("Em que ano você nasceu ? ")
      leia (anoNasci)
      idade := anoAtual - anoNasci
      escreva ("Você tem ", idade, " anos ")
      
      se(idade >=18)entao
           escreva (" portanto você ja é maior de idade.")
      senao
           escreva (" portanto você é menor de idade.")
      fimse
*/

var anoAtual, anoNasci, idade;

anoAtual=prompt("Em que ano estamos? ")
anoNasci=prompt("Em que ano você nasceu? ")
idade=anoAtual - anoNasci
alert("Você tem " +idade+ " anos")

    if(idade >=18)
        alert(" portanto você ja é maior de idade.")
        else
        alert(" portanto você é menor de idade.")
