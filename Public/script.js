console.log(candidato1);
console.log(candidato2);
console.log(candidato3);

let input = document.getElementById("input");
//const container = document.getElementById("container");

// função que aciona os botões
function acionabtn(value_btn){
    for(i=0; i<10; i++){
            passarValorTela(value_btn,i);
    }
    testaTamanhoInput();

    
}

// Função responsável por passar o valor do botão para o input 
function passarValorTela(value_input,i){
    if(value_input == i){
        input.value = input.value + i;
    }

}

// Funcão que testa quantos números(string) tem no input
function testaTamanhoInput(){
    input.value.toString()

    if(input.value.length == 2){
        console.log("passando 2 números")
    }
    
    imprimeCandidatos();
}

// função que passará os dados de cada candidato
function imprimeCandidatos(){
    if(input.value == 10){
        setCandidato1()
    } else if(input.value == 20){
        setCandidato2()
    } else if(input.value == 30){
        setCandidato3()
    }
}

// Pegando e passando os dados do objeto candidato 1 
function setCandidato1(){
    const nome = candidato1.nome_candidato;
        document.getElementById("nome").innerHTML = nome;
        
        const partido = candidato1.partido;
        document.getElementById("partido").innerHTML = partido;

        const nome_vice = candidato1.nome_vice;
        document.getElementById("nome-vice").innerHTML = nome_vice;

        const img_candidato = document.getElementById("presidente");
        const set_img_candidato = presidente.setAttribute("src",candidato1.foto_candidato);

        const img_vice = document.getElementById("vice");
        const set_img_vice = vice.setAttribute("src",candidato1.foto_vice);
}

// Pegando e passando os dados do objeto candidato 2 
function setCandidato2(){
    const nome = candidato2.nome_candidato;
        document.getElementById("nome").innerHTML = nome;
        
        const partido = candidato2.partido;
        document.getElementById("partido").innerHTML = partido;

        const nome_vice = candidato2.nome_vice;
        document.getElementById("nome-vice").innerHTML = nome_vice;

        const img_candidato = document.getElementById("presidente");
        const set_img_candidato = presidente.setAttribute("src",candidato2.foto_candidato);

        const img_vice = document.getElementById("vice");
        const set_img_vice = vice.setAttribute("src",candidato2.foto_vice);
}

// Pegando e passando os dados do objeto candidato 3
function setCandidato3(){
    const nome = candidato3.nome_candidato;
        document.getElementById("nome").innerHTML = nome;
        
        const partido = candidato3.partido;
        document.getElementById("partido").innerHTML = partido;

        const nome_vice = candidato3.nome_vice;
        document.getElementById("nome-vice").innerHTML = nome_vice;

        const img_candidato = document.getElementById("presidente");
        const set_img_candidato = presidente.setAttribute("src",candidato3.foto_candidato);

        const img_vice = document.getElementById("vice");
        const set_img_vice = vice.setAttribute("src",candidato3.foto_vice);
}

/*function aciona_btncorrige(){
   imprimeCandidatos() = "";
   input.focus();
} */
