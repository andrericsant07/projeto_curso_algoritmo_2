/*    escreva("Digite o valor do primeiro lado: ")
     leia (lado1)
     escreva ("Digite o valor do segundo lado: ")
     leia (lado2)
     escreva ("Digite o valor do terceiro lado: ")
     leia (lado3)
     triangulo := (lado1 < lado2 + lado3) e (lado2 < lado1 + lado3) e (lado3 < lado1 + lado2)
     equilatero := (lado1 = lado2) e (lado2 = lado3)
     escaleno := (lado1 < lado2) ou (lado2 > lado3) ou (lado1 < lado3)
     escreval ("Pode formar um triangulo? ", triangulo)
     escreval ("O triangulo é equilatero. ",equilatero)
     escreva ("O triangulo é escaleno. ",escaleno)
*/

var lado1, lado2, lado3, equilatero, escaleno, triangulo;

lado1=prompt("Digite o valor do primeiro lado: ")
lado2=prompt("Digite o valor do segundo lado: ")
lado3=prompt("Digite o valor do terceiro lado: ")
 
triangulo=(lado1 < lado2 + lado3) && (lado2 < lado1 + lado3) && (lado3 < lado1 + lado2)
equilatero=(lado1 == lado2) && (lado2 == lado3)
escaleno=(lado1 < lado2) || (lado2 > lado3) || (lado1 < lado3)
alert("Pode formar um triangulo? "+ triangulo)
alert("O triangulo é equilatero. "+ equilatero)
alert("O triangulo é escaleno. "+ escaleno)