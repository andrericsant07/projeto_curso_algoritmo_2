var nome, peso, altura, imc;

nome= prompt("Digite o seu nome: ")
peso= prompt("Digite o seu peso: ")
altura= prompt("Digite a sua altura: ")
imc= peso / (altura ^2)
alert("O " +nome+ " tem um imc de " +imc)

if(imc<17){
    alert(" portanto está muito abaixo do peso.")
}else if((imc>=17)&&(imc<18.5)){
    alert(" ,você está abaixo do peso.")
    }else if((imc>=18.5)&&(imc<25)){
        alert(" ,você está no peso ideal.")
    }else if((imc>=25)&&(imc<30)){
        alert(" ,você está acima do peso.")
    }else if((imc>=30)&&(imc<35)){
        alert(" ,você está muito acima do peso.")
    }else if((imc>=35)&&(imc<40)){
        alert(" ,você está com obesidade severa.")
    }else{
        alert(" ,você está com obesidade mórbida.")
    }
