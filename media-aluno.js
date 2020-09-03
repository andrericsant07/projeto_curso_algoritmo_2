/*escreva("Digite o nome do aluno: ")
      leia(nome)
      escreva("Digite a primeira nota do aluno: ")
      leia(nota01)
      escreva("Digite a segunda nota do aluno: ")
      leia(nota02)
      media:=(nota01+nota02)/2
      escreval("Sua média é ",media)
      
      se(media>=6)entao
          escreva("Parabéns você passou de ano.")
      senao
          escreva("Uma pena você repetiu.")
      fimse
*/

nome= prompt("Digite o nome do aluno: ")
nota01= prompt("Digite a primeira nota do aluno: ")
nota02= prompt("Digite a segunda nota do aluno: ")

media= (parseInt(nota01) + parseInt(nota02)) / 2
alert("Sua média é " +media)

if(media>=6)
    alert("Parabéns você passou de ano.")
    else
    alert("Uma pena, pois você repetiu de ano.")