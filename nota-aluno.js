var nome, nota01, nota02,media

nome= prompt("Digite o nome do aluno: ")
nota01= prompt("Digite a primeira nota do aluno: ")
nota02= prompt("Digite a segunda nota do aluno: ")
media= (parseInt(nota01) + parseInt(nota02)) / 2
alert("O aluno " +nome+ " obteve média " +media+ "dessa forma, ")

    if(media>=6)
        alert(" parabéns, você está aprovado.")
        else if(media==5)
            alert(" atenção, você ficou de recuperação.")
            else
            alert(" infelizmente você foi reprovado.")
        
        
