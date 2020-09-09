var doar, opcao, valor;

alert("Digite 1 para doar R$10,00.")
alert("Digite 2 para doar R$30,00.")
alert("Digite 3 para doar R$50,00.")
alert("Digite 4 para escolher o valor da doação.")
alert("Digite 5 para CANCELAR.")
doar= prompt("Digite a opção desejada:")

switch(doar){
    case"1":
        valor=10
        break;
    case"2":
        valor=30
        break;
    case"3":
        valor=50
        break;
    case"4":
        valor= prompt("Digite o valor a ser doado:")
        break;
    case"5":
        valor=0
        break;
}
    alert("O valor doado foi de " +valor)
