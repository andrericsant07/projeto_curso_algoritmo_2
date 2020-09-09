var emprestimo, valor, juros, parcela;

emprestimo= prompt("Qual o valor do empréstimo ? ")
juros= prompt("Qual o valor da taxa de juros? ")
valor= parseInt(emprestimo) + (parseInt(emprestimo) * parseInt(juros)/100)

alert("O valor do empréstimo mais os juros é de R$ " + valor)
parcela= prompt("Em quantas parcelas vai dividir? ")
alert("O valor de cada parcela é de R$" + (valor/parcela))
