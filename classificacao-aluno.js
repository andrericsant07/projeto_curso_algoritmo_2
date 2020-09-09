var nome, nota01, nota02, media;

nome= prompt("Digite o nome do aluno(a): ")
nota01= prompt("Digite a primeira nota de " +nome+ " :")
nota02= prompt("Digite a segunda nota: ")
media= (parseInt(nota01) + parseInt(nota02)) / 2
alert("A média do(a) aluno(a) " +nome+ " equivale a " +media)

if(media>=9){
        alert(" ,portanto sua classificação é A (excelente).")
    }else if((media>=8)&&(media<9)){
        alert(" ,sua classificação é B (ótima).")
    }else if((media>=7)&&(media<8)){
        alert(" ,sua classificação é C (boa).")
    }else if((media>=6)&&(media<7)){
        alert(" ,sua classificação é D (regular).")
    }else if((media>=5)&&(media<6)){
        alert(" ,sua classificação é E (ruim).")
    }else
        alert(" ,sua classificação é F (péssima).")
