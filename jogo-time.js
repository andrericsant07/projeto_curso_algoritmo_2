var time01, time02, jogo, placar, dif;

time01= prompt("Digite o nome do primeiro time: ")
time02= prompt("Digite o nome do segundo time: ")
placar= prompt("Digite o placar entre " +time01+ " X " +time02+ " :")
alert("A diferença no jogo foi de 0, 2, 4, 6 gols ?")
dif= prompt("Diferença de:  ")

switch(dif){
    case"0":
    jogo= "Empate"
    break;
    case"2":
    jogo= "Normal"
    break;
    case"4":
    jogo= "Goleada"
    break;
    case"6":
    jogo= "Goleadahistórica"
    break;
}
alert("O resultado do jogo foi " +jogo)