var contador, valor, salto;

valor= prompt("Qual o valor que deseja alcançar? ")
salto= prompt("Qual o salto a cada número? ")
contador= 0

while(contador<valor){
    alert(contador)
    contador= parseInt(contador) + parseInt(salto)
}
alert("Tarefa bem executada")