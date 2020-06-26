
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
console.log(bancoDeDados_img)


//array para setar o id das cartas
let setId = [];
for (let i = 0; i < 30; i++) {
     setId[i] = "cart"+ (i+1);            
};




function iniciarJogo() {
    let dificuldade = document.getElementById("dificuldade_id").value;
    let nome = document.getElementById("nome_id").value;
    let numeros_de_cartas = 0;
    let numero_de_linha = 0;
    let numero_de_img = 0;
    let tabuleiro = document.getElementById("tabuleiro_do_jogo");

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
    while(array_img.length < numeros_de_cartas){

        // gerando um numero aleatorio de 0 a 15
        let num_ale = Math.floor(Math.random() * 15);
        
        // Essa variavel ira pegar uma referencia de imagem aleatoria no meu banco de dados de imagem
        let var_verifica = bancoDeDados_img[num_ale].scr

        //Verificando se no meu array_img ja existe a imagem gerada a cima, se sim
        if (array_img.indexOf(var_verifica) == -1)
        {
            
            array_img.push(var_verifica);
            array_img.push(var_verifica);
            
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
    let set_id = null;
    let img_card = null;
    let indice = null;
    let array_verificador = [];

    for (let i = 0; i < numero_de_img; i++) {
        array_verificador[i] = 1;
        
    }
    
    //Fazendo o calculo para obter o numero de colunas

    let colunas = numeros_de_cartas / numero_de_linha;


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
    
        set_id = setId[control_id];

        ponto_em_linha = document.createElement("td");    

        divCard = document.createElement("div");
        divCard.setAttribute("class", "card");
        divCard.setAttribute("id",set_id);
        divCard.setAttribute("onclick", "girarCarta()");

        divFaceBack = document.createElement("div");
        divFaceBack.setAttribute("class","face_back visivel");

        tagImagem = document.createElement("img");
        tagImagem.setAttribute("src", "assets/img/palhaco.png");
        tagImagem.setAttribute("height", "35%");
        tagImagem.setAttribute("width", "50%");
        tagImagem.setAttribute("style", "opacity: 90%");

        divFaceFront = document.createElement("div");
        divFaceFront.setAttribute("class","face_front invisivel");

        tagImagem2 = document.createElement("img");
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





function girarCarta(){
    let carta = document.getElementById(event.currentTarget.id);
    console.log(carta.children);
    
    carta.children[0].classList.toggle("invisivel");
    carta.children[1].classList.toggle("invisivel");



}

function reset() {
    aler("funciona");
}
