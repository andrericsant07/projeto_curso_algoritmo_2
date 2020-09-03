/* emprestimo, valor: real
   juros, parcela: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
      escreva ("Qual o valor do empréstimo ? R$ ")
      leia (emprestimo)
      escreva ("Qual o valor da taxa de juros ?" )
      leia (juros)
      valor := emprestimo + (emprestimo * juros/100)
      escreval ("O valor do emprestimo mais os juros é de R$ ",valor)
      escreva ("Em quantas parcelas vai dividir ? ")
      leia (parcela)
      escreva ("O valor de cada parcela é de R$ ",valor / parcela)
*/

var emprestimo, valor, juros, parcela;

emprestimo= prompt("Qual o valor do empréstimo ? ")
juros= prompt("Qaul o valor da taxa de juros? ")
valor= parseInt(emprestimo) + (parseInt(emprestimo) * parseInt(juros)/100)

alert("O valor do empréstimo mais os juros é de R$ " + valor)
parcela= prompt("Em quantas parcelas vai dividir? ")
alert("O valor de cada parcela é de R$" + (valor/parcela))