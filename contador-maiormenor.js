var contador, numeral, soma, maiorNum, menorNum;

contador= 1
soma= 0
maiorNum=0
menorNum=prompt
while(contador<=5){
    numeral= prompt("Digite o " +contador+ "°num:")
        if(numeral>maiorNum)
            maiorNum= numeral
        else if(numeral<menorNum)
            menorNum= numeral
              
            soma= parseInt(soma)+parseInt(numeral)
            contador=contador+1
}
alert("A soma de todos os número é " +soma)
alert("O maior número digitado foi " +maiorNum)
alert("O menor número digitado foi " +menorNum)