var peso, altura, imc;

 peso= prompt("Digite o seu peso: ")
 altura= prompt("Digite a sua altura: ")

 imc= peso / (altura ^ 2)
 alert("O seu imc é " +imc)

    if((imc >= 18.5) && (imc <= 25))
        alert("Você está no peso certo.")
        else
        alert("Você está fora do peso certo.")
