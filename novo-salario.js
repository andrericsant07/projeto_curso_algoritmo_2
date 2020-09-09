var nome, salario, novoSalario, dependente;

nome= prompt("Digite o nome do funcionário: ")
salario= prompt("Qual o salário do funcionário: ")
dependente= prompt("Qual o número de dependentes: ")

switch(dependente){
    case"0":
    novoSalario=salario + (parseInt(salario)*5/100)
    break;
    case"1": case"2": case"3":
    novoSalario=salario + (parseInt(salario)*10/100)
    break;
    case"4": case"5": case"6":
    novoSalario=salario + (parseInt(salario)*15/100)
    break;
    case"outro":
    novoSalario=salario + (parseInt(salario)*18/100)
    break;
}
alert("O salário de " +nome+ " agora é de " +novoSalario)