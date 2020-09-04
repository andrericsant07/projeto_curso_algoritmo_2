nome= prompt("Digite o nome do aluno: ")
nota01= prompt("Digite a primeira nota do aluno: ")
nota02= prompt("Digite a segunda nota do aluno: ")

media= (parseInt(nota01) + parseInt(nota02)) / 2
alert("Sua média é " +media)

if(media>=6)
    alert("Parabéns você passou de ano.")
    else
    alert("Uma pena, pois você repetiu de ano.")