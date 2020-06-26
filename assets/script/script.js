
//Gerando um array para guardar todas as imagens das cartas, para que posteriormente eu consiga pegar em modo aleatorio 

let bancoDeDados_img = [ 
    {class:"car1",
     scr:"assets/img/img1.png"},

     {class:"card2",
     scr:"assets/img/img2.png"},

     {class:"card3",
     scr:"assets/img/img3.png"},

     {class:"card4",
     scr:"assets/img/img4.png"},

     {class:"card5",
     scr:"assets/img/img5.png"},

     {class:"card6",
     scr:"assets/img/img6.png"},

     {class:"card7",
     scr:"assets/img/img7.png"},

     {class:"card8",
     scr:"assets/img/img8.png"},

     {class:"card9",
     scr:"assets/img/img9.png"},

     {class:"card10",
     scr:"assets/img/img10.png"},

     {class:"card11",
     scr:"assets/img/img11.png"},

     {class:"card12",
     scr:"assets/img/img12.png"},

     {class:"card13",
     scr:"assets/img/img13.png"},

     {class:"card14",
     scr:"assets/img/img14.png"},

     {class:"card15",
     scr:"assets/img/img15.png"}   
];


//array para setar o id das cartas
//esta sendo formado por umm laco for para automatizar processo
let setId = [];
for (let i = 0; i < 30; i++) {
     setId[i] = "cart"+ (i+1);            
};

function reset() {
    alert("oi");
}


//==================================================================================================================================

function iniciarJogo() {


    //iniciando variaveis e 
    let dificuldade = document.getElementById("dificuldade_id").value;
    let nome = document.getElementById("nome_id").value;
    let numeros_de_cartas = 0;
    let numero_de_linha = 0;
    let numero_de_img = 0;
    let tabuleiro = document.getElementById("tabuleiro_do_jogo");


    //Determinando as variaveis de controle para o retos do scrit fazer a renderizasao das cartas confromes o nivel selecionando
    switch (dificuldade) {
        case "facil":
            numeros_de_cartas = 12;
            numero_de_linha = 3;     
            numero_de_img = numeros_de_cartas / 2;               
            break;
        
        case "medio":
            numeros_de_cartas = 20;
            numero_de_linha = 4;
            numero_de_img = numeros_de_cartas / 2;      

            break;
        case "dificil":
            numeros_de_cartas = 30;
            numero_de_linha = 5;
            numero_de_img = numeros_de_cartas / 2;          
    
        default:
            break;
    }

    //Forma array para buscar no banco de dados de imagem, algumas imagem aleatorias

    let array_img = [];

    //estrutura de repeticao para acresentar um determinadoo numeros de imagem dentro de um array, sem repetir as imagens.
    while ( array_img.length < numeros_de_cartas ){

        let numero_aleatorio = (Math.floor(Math.random() * 15) + 1);

        // Essa variavel sera para verificar se a imagem e repetida
        let verificadora = "assets/img/img"+numero_aleatorio+".png";

        //Se dentro do meu array nao tiver a imagem gerada acima, ele acrescentara no meu array, caso contrario
        //ele gera uma outra imagem  para que ela nao se repitta
        if (array_img.indexOf(verificadora) == -1) {
            array_img.push(verificadora);
            array_img.push(verificadora);
        }
    }
   
    console.log(array_img);

    let divCard = null;
    let linha = null;
    let ponto_em_linha = null;
    let divFaceBack = null;
    let divFaceFront = null; 
    let tagImagem = null;
    let tagImagem2 = null;
    let control_id = 0;
    let teste = null;
    let img_card = null;
    let indice = null;
    let array_verificador = [];

    for (let i = 0; i < numero_de_img; i++) {
        array_verificador[i] = 1; 
    }

    
    //Fazendo o calculo para obter o numero de colunas

    let colunas = numeros_de_cartas / numero_de_linha;




    //Aqui temos duas estruturas de loop for, uma para inicializar uma linha, e outra para 
    for (let i = 0; i < numero_de_linha; i++) {
        
        linha = document.createElement("tr");
    
        for (let i = 0; i < colunas; i++) {

        let numero_aleatorio2 = Math.floor(Math.random() *  (numero_de_img - 1));
        console.log(numero_aleatorio2)
        img_card = array_img[numero_aleatorio2];

        console.log(img_card);
        console.log(array_img);

        indice = array_img.indexOf(img_card);
        array_verificador.splice(indice, 1);

            
           
        
        array_img.splice(indice, 1);


        
    
        teste = setId[control_id];

        ponto_em_linha = document.createElement("td");    

        divCard = document.createElement("div");
        divCard.setAttribute("class", "card");
        divCard.setAttribute("id",teste);
        divCard.setAttribute("onclick", "girarCarta()");

        divFaceBack = document.createElement("div");
        divFaceBack.setAttribute("class","face_back");

        tagImagem=document.createElement("img");
        tagImagem.setAttribute("src", "assets/img/palhaco.png");
        tagImagem.setAttribute("height", "35%");
        tagImagem.setAttribute("width", "50%");
        tagImagem.setAttribute("style", "opacity: 90%");

        divFaceFront = document.createElement("div");
        divFaceFront.setAttribute("class","face_front");

        tagImagem2=document.createElement("img");
        tagImagem2.setAttribute("src",img_card);
        tagImagem2.setAttribute("height", "35%");
        tagImagem2.setAttribute("width", "50%");


        divFaceBack.appendChild(tagImagem);
        divFaceFront.appendChild(tagImagem2);
        divCard.appendChild(divFaceBack);
        divCard.appendChild(divFaceFront);
        ponto_em_linha.appendChild(divCard);
        linha.appendChild(ponto_em_linha);

        control_id++ ;


      
        
        }
        tabuleiro.appendChild(linha)
        
    }

    /*
        <table id="tabuleiro_do_jogo">
        <tr>
            <td>
                <div class="card" id="card1" onclick="girarCarta()">
                    <div class="face_back visivel" ><img src="assets/img/palhaco.png" width="50%" height="35%" style="opacity: 75%;"/></div>
                    <div class="face_front invisivel"  ><img src="assets/img/bussola.png" width="50%" height="35%"/></div>
                </div>
            </td>    

    */

}

//===================================================================================================================================================


function girarCarta(){
    let carta = document.getElementById(event.currentTarget.id);
    console.log(carta.children);
    
    carta.children[0].classList.toggle("invisivel");
    carta.children[1].classList.toggle("invisivel");




}

