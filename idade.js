var anoAtual, anoNasci, idade;

anoAtual=prompt("Em que ano estamos? ")
anoNasci=prompt("Em que ano você nasceu? ")
idade=anoAtual - anoNasci
alert("Você tem " +idade+ " anos")

    if(idade >=18)
        alert(" portanto você ja é maior de idade.")
        else
        alert(" portanto você é menor de idade.")
