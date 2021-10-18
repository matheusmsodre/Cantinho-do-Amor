var fator = 0;
var resposta = [];  
var corretas = 0;
var acertos = 0;
var A,B,C,D;
var classe = document.getElementsByClassName("btn-quiz");
var begin;
var end;
var i = 0;

function guardar(escolha,quest){

    if(escolha=="RespostaCorreta"){
        resposta[quest-1] = 1;
    } else {
        resposta[quest-1] = 0;
    }
            
}

function MarcarRespostas(){
    window.location.href = "#firstid";
    for(let i = 0; i <= 28; i++){
        document.getElementsByClassName("btn-quiz RespostaCorreta")[i].style.backgroundColor = "rgba(0,0,0,0)"
        document.getElementsByClassName("btn-quiz RespostaCorreta")[i].style.color = "rgb(0, 163, 0)"
        document.getElementsByClassName("btn-quiz RespostaCorreta")[i].style.boxShadow = "0px 0px 2px 2px rgb(0, 163, 0)"
        document.getElementsByClassName("btn-quiz RespostaCorreta")[i].style.border = "2px solid rgb(0, 163, 0)"
    }
}

function selecionar(alternativa,questao){

    let i;

    begin = 0+questao;
    end = 3+questao;
    fator = questao;
    A = document.getElementsByClassName("btn-quiz")[0+fator];
    B = document.getElementsByClassName("btn-quiz")[1+fator];
    C = document.getElementsByClassName("btn-quiz")[2+fator];
    D = document.getElementsByClassName("btn-quiz")[3+fator];

   if(alternativa==1){

        for(i = begin; i <= end; i++ ){    
            classe[i].style.backgroundColor = "rgba(255, 0, 47, 1)";
            classe[i].style.color = "white";
            classe[i].style.fontSize = "18pt";
            classe[i].style.border = "3px solid rgb(255, 0, 47)";
            classe[i].style.boxShadow = "0px 0px 0px 0px rgb(0, 0, 96)";
        }
        A.style.backgroundColor = "rgba(255, 0, 47, 0)";
        A.style.color = "rgb(255, 0, 47)";
        A.style.fontSize = "21pt";
        A.style.border = "2px solid rgba(0, 0, 96)";
        A.style.boxShadow = "0px 0px 2px 2px rgb(0, 0, 96)";
    } else if(alternativa==2){
        for(i = begin; i <= end; i++ ){    
            classe[i].style.backgroundColor = "rgba(255, 0, 47, 1)";
            classe[i].style.color = "white";
            classe[i].style.fontSize = "18pt";
            classe[i].style.border = "3px solid rgb(255, 0, 47)";
            classe[i].style.boxShadow = "0px 0px 0px 0px rgb(0, 0, 96)";
        }
        B.style.backgroundColor = "rgba(255, 0, 47, 0)";
        B.style.color = "rgb(255, 0, 47)";
        B.style.fontSize = "21pt";
        B.style.border = "2px solid rgba(0, 0, 96)";
        B.style.boxShadow = "0px 0px 2px 2px rgb(0, 0, 96)";
    } else if(alternativa==3){
        for(i = begin; i <= end; i++ ){    
            classe[i].style.backgroundColor = "rgba(255, 0, 47, 1)";
            classe[i].style.color = "white";
            classe[i].style.fontSize = "18pt";
            classe[i].style.border = "3px solid rgb(255, 0, 47)";
            classe[i].style.boxShadow = "0px 0px 0px 0px rgb(0, 0, 96)";
        }
        C.style.backgroundColor = "rgba(255, 0, 47, 0)";
        C.style.color = "rgb(255, 0, 47)";
        C.style.fontSize = "21pt";
        C.style.border = "2px solid rgba(0, 0, 96)";
        C.style.boxShadow = "0px 0px 2px 2px rgb(0, 0, 96)";
    } else if(alternativa==4){
        for(i = begin; i <= end; i++ ){    
            classe[i].style.backgroundColor = "rgba(255, 0, 47, 1)";
            classe[i].style.color = "white";
            classe[i].style.fontSize = "18pt";
            classe[i].style.border = "3px solid rgb(255, 0, 47)";
            classe[i].style.boxShadow = "0px 0px 0px 0px rgb(0, 0, 96)";
        }
        D.style.backgroundColor = "rgba(255, 0, 47, 0)";
        D.style.color = "rgb(255, 0, 47)";
        D.style.fontSize = "21pt";
        D.style.border = "2px solid rgba(0, 0, 96)";
        D.style.boxShadow = "0px 0px 2px 2px rgb(0, 0, 96)";
    }

}

var dianamo;

function Abrirfoto(params){
    
    if(params==1){
        dianamo = document.getElementById("DN").src;
        if( dianamo[(dianamo.length)-5] == 0){
            document.getElementById("DN").src = "assets/presentes/DN1.png"
            document.getElementById("btnabrir").innerText = "Fechar"
            document.getElementById("DN").className = `photo vertical extreme`;
            dianamo = document.getElementById("DN").src;
            document.getElementById("DNdown").href = `assets/presentes/DN1.png`
        } else {
            document.getElementById("DN").src = "assets/presentes/DN0.png"
            document.getElementById("btnabrir").innerText = "Abrir"
            document.getElementById("DN").className = `photo`;
            dianamo = document.getElementById("DN").src;
            document.getElementById("DNdown").href = `assets/presentes/DN0.png`
        }
    } else if(params==2){
        dianamo = document.getElementById("meses").src;
        if( dianamo[(dianamo.length)-5] == 0){
            document.getElementById("meses").src = "assets/presentes/meses1.png"
            dianamo = document.getElementById("meses").src;
            document.getElementById("mesesdown").href = `assets/presentes/meses1.png`
        } else {
            document.getElementById("meses").src = "assets/presentes/meses0.png"
            dianamo = document.getElementById("meses").src;
            document.getElementById("mesesdown").href = `assets/presentes/meses0.png`
        }
    } else {
        dianamo = document.getElementById("niver").src;
        if( dianamo[(dianamo.length)-5] == 0){
            document.getElementById("niver").src = "assets/presentes/niver1.png"
            dianamo = document.getElementById("niver").src;
            document.getElementById("niverdown").href = `assets/presentes/niver1.png`
        } else {
            document.getElementById("niver").src = "assets/presentes/niver0.png"
            dianamo = document.getElementById("niver").src;
            document.getElementById("niverdown").href = `assets/presentes/niver0.png`
        }
    }
}



function resultado(){


    for(i = 0; i < 20; i++){
        if (resposta[i]==1) {
            corretas++;
        }
    }

// corretas = (acertos/100)*30

    acertos = (100*corretas)/resposta.length;

    document.getElementById("cabe1").innerHTML += `<p class="fimpp">Você respondeu a todas as perguntas e conseguiu terminar o quiz do nosso relacionamento,
    acertando ${corretas} das ${resposta.length} questões, portanto ${acertos.toFixed(2)}% do quiz, minha lindona, PARABÉNS!
    </p>
    <p class="fimpp2">
    Agora você pode conferir as respostas corretas ou voltar ao menu principal para aproveitar outra aventura do cantinho do amor, minha princesa!
    </p>`

/*if(Math.max(x,y,z,w)==x && x!=y && x!=z && x!=w){
    window.location.href = "grifinoria.style.html"
*/
}

function MudarPagina(parametro){
    
    if(parametro[0]=="i"){
        window.open(parametro);
    } else if(parametro=="zoom"){
        alert("SE DIVIRTA AUMENTANDO E DIMINUINDO O ZOOM DA PÁGINA AMOR!!!");
    }else {
        window.location.href = parametro;
    }
    

}


function ImprimirFoto(parametro) {
    
    document.getElementById("Fotoparaimpressão").src = `assets/${parametro}`
    

}

function confirmprint() {
    var printC = confirm("Confirma a impressão?");
    if(printC==true){
        setTimeout(function () { window.print(); }, 500);
        window.onfocus = function () { setTimeout(function () { window.close(); }, 500); }
    } else{
        window.close();
    }
}
function Passpagenamo() {

    if(i<4){
        i++;
        document.getElementById("namo").src = `assets/presentes/namo${i}.png`;
        window.location.href = `#delimitador4`
        document.getElementById("namodown").href = `assets/presentes/namo${i}.png`
        if(i==2 || i==4){
            document.getElementById("namo").className = `photo vertical`;
        } else {
            document.getElementById("namo").className = `photo`;
        }
    }

}

function Backpagenamo() {
    
    if(i>0){
        i--;
        document.getElementById("namo").src = `assets/presentes/namo${i}.png`;
        window.location.href = `#delimitador4`
        document.getElementById("namodown").href = `assets/presentes/namo${i}.png`
    }
    if(i==2 || i==4){
        document.getElementById("namo").className = `photo vertical`;
    } else {
        document.getElementById("namo").className = `photo`;
    }
}


function Passpage() {

    if(i<11){
        i++;
        document.getElementById("scrap").src = `assets/presentes/sb${i}.png`;
        window.location.href = `#delimitador6`
        document.getElementById("scrapDown").href = `assets/presentes/sb${i}.png`
        if(i==1){
            document.getElementById("scrap").className = `photo vertical`;
        } else {
            document.getElementById("scrap").className = `photo`;
        }
    }

}

function Passpagemundo() {

    if(i<2){
        i++;
        document.getElementById("mundo").src = `assets/presentes/mundo${i}.png`;
        window.location.href = `#delimitmundo3`
        document.getElementById("mundodown").href = `assets/presentes/mundo${i}.png`
        if(i>1){
            document.getElementById("mundo").className = `photo vertical`;
        } else {
            document.getElementById("mundo").className = `photo`;
        }
    }

}

function Passpagenatal() {

    if(i<2){
        i++;
        document.getElementById("natal").src = `assets/presentes/natal${i}.png`;
        window.location.href = `#delimitador5`
        document.getElementById("nataldown").href = `assets/presentes/natal${i}.png`
        if(i>0){
            document.getElementById("natal").className = `photo vertical extreme`;
        } else {
            document.getElementById("natal").className = `photo`;
        }
    }

}

function Backpagemundo() {
    
    if(i>0){
        i--;
        document.getElementById("mundo").src = `assets/presentes/mundo${i}.png`;
        window.location.href = `#delimitador3`
        document.getElementById("mundodown").href = `assets/presentes/mundo${i}.png`
    }
    if(i>1){
        document.getElementById("mundo").className = `photo vertical`;
    } else {
        document.getElementById("mundo").className = `photo`;
    }
}

function Backpagenatal() {
    
    if(i>0){
        i--;
        document.getElementById("natal").src = `assets/presentes/natal${i}.png`;
        window.location.href = `#delimitador5`
        document.getElementById("nataldown").href = `assets/presentes/natal${i}.png`
    }
    if(i>0){
        document.getElementById("natal").className = `photo vertical extreme`;
    } else {
        document.getElementById("natal").className = `photo`;
    }
}


function Backpage() {
    
    if(i>0){
        i--;
        document.getElementById("scrap").src = `assets/presentes/sb${i}.png`;
        window.location.href = `#delimitador6`
        document.getElementById("scrapDown").href = `assets/presentes/sb${i}.png`
    }
    if(i==1){
        document.getElementById("scrap").className = `photo vertical`;
    } else {
        document.getElementById("scrap").className = `photo`;
    }

}


var quadro = document.getElementsByClassName('quadro');
var framecount = [];

for(let i = 0; i < 441; i++){
    framecount[i] = 0;
}

var marcador = "marcar";

function marcar(estilo){
    marcador = estilo;
    if(marcador=="marcar"){
        Btnpicross[1].style.backgroundColor = "rgb(189, 214, 238)"
        Btnpicross[1].style.color = "rgb(252, 4, 57)"
        Btnpicross[1].style.boxShadow = "0px 0px 20px 10px rgb(252, 4, 57)"
        Btnpicross[0].style.backgroundColor = "rgb(252, 4, 57)"
        Btnpicross[0].style.color = "rgb(189, 214, 238)"
        Btnpicross[0].style.boxShadow = "0px 0px 0px 0px rgb(252, 4, 57)"
    } else {
        Btnpicross[1].style.backgroundColor = "rgb(252, 4, 57)"
        Btnpicross[1].style.color = "rgb(189, 214, 238)"
        Btnpicross[1].style.boxShadow = "0px 0px 0px 0px rgb(252, 4, 57)"
        Btnpicross[0].style.backgroundColor = "rgb(189, 214, 238)"
        Btnpicross[0].style.color = "rgb(252, 4, 57)"
        Btnpicross[0].style.boxShadow = "0px 0px 20px 10px rgb(252, 4, 57)"
    }
}

var Btnpicross = document.getElementsByClassName("botoes");

function selectframe(coordenada,frameL,frameC){

    
    let indice = frameL+(21*frameC);

    if(marcador=="desmarcar"){
        if(framecount[indice]==0){
            quadro[indice].style.backgroundColor = 'rgb(253, 178, 194)';
            framecount[indice] = -1;
        } else {
            quadro[indice].style.backgroundColor = 'rgb(189, 214, 238)';
            framecount[indice] = 0;
        }
    } else {
        if(framecount[indice]==0){
            quadro[indice].style.backgroundColor = 'rgb(0, 0, 51)';
            framecount[indice] = 1;
            framecount[indice] += coordenada;
        } else {
            quadro[indice].style.backgroundColor = "rgb(189, 214, 238)";
            framecount[indice] = 0;
        }
    }

}

var contadorAcertos = 0;
var contadorErros = 0;

function verificarcoordenadas(params){
    contadorAcertos = 0;
    contadorErros = 0;
    for(let i = 0; i < 441; i++){
        if(framecount[i] == 1){
            contadorErros += 1;
        } else if(framecount[i] >= 2){
            contadorAcertos++;
        }
            
    }
    if(contadorAcertos==params && contadorErros==0){
        popup(2);
    } else if(contadorAcertos==0 && contadorErros==0){
        alert("Comece o jogo, minha perfeita!")
    } else {
        alert("Você está quase conseguindo meu amor, siga firme!")
    }
}

//facil 158
//medio 120
//dificil 131

function popup(params) {
    if(params==2){
        document.getElementById("popupwin").style.display = "inline-block";
    }else{
        document.getElementById("popup").style.display = "inline-block";
    }
    
}

function closepopup(params) {
    if(params==2){
        document.getElementById("popupwin").style.display = "none";
    }else{
        document.getElementById("popup").style.display = "none";
    }
}

function VoltarPagina(mural) {
    if(mural==1){
        window.location.href = `menu.html`
    } else if(mural==2){
        window.location.href = `index.html`
    } else {
        window.history.back();
    }
    
}

function passarfoto(params,side) {
    if(side==1 && params<28){
        window.location.href = `#delimitador${params+1}`
    } else if(side==-1 && params>0){
        window.location.href = `#delimitador${params-1}`
    }
}



function preencher() {
    
    for(let i = -1; i <= 29; i++){
        if(i<=21){
            document.getElementById('content').innerHTML += `<div id="delimitador${i}" class="delimitador"><img class="photo" src="assets/mural/mural${i}.jpg" alt="" ><br>  <button class="BtnPassar" onclick="passarfoto(${i},-1)"><</button> <button class="BtnPassar" onclick="passarfoto(${i},1)">></button> <a href="assets/mural/mural${i}.jpg" class="BtnBaixar" download>Baixar Imagem</a></div><br>`
        } else {
            if(i==29){
                document.getElementById('content').innerHTML += `<div id="delimitador${i}" class="delimitador"><img class="photo vertical" src="assets/mural/mural${i}.jpg" alt="" ><br> <button class="BtnPassar" onclick="passarfoto(${i},-1)"><</button>  <a href="assets/mural/mural${i}.jpg" class="BtnBaixar" download>Baixar Imagem</a></div><br>`
            } else{
                document.getElementById('content').innerHTML += `<div id="delimitador${i}" class="delimitador"><img class="photo vertical" src="assets/mural/mural${i}.jpg" alt="" ><br> <button class="BtnPassar" onclick="passarfoto(${i},-1)"><</button> <button class="BtnPassar" onclick="passarfoto(${i},1)">></button> <a href="assets/mural/mural${i}.jpg" class="BtnBaixar" download>Baixar Imagem</a></div><br>`
            }
           
        }
    }
}


function iniciarjogo() {
    for(let i = 12; i <= 21; i++){
        facility[i].disabled = true;
        facility[i].style.cursor = "not-allowed";
        facility[i].style.color = "rgba(255, 255, 255, 0.3)";
        facility[i].style.backgroundColor = "rgba(67, 67, 67, 0.3)";
        facility[i].style.border = "0px solid rgb(67, 67, 67, 0.3)";
        facility[i].style.boxShadow = "0px 0px 0px 0px rgb(255, 0, 43)";
    }
}


function MudarTurno() {
    if(turno=="matheusmo"){
        turno = "anniemo";
        apostaAnnie = 0;
        apostaIPannie = null;
        document.getElementById("turno").innerText = "Anniemo"
    }else if(turno=="anniemo"){
        turno="matheusmo";
        apostaAnnie = 0;
        document.getElementById("turno").innerText = "Matheusmo"
    }

    for(let i = 2; i <= Anniemo+1; i++){
        facility[i].style.color = "white";
        facility[i].style.backgroundColor = "black";
        facility[i].style.border = "1px solid rgb(255, 0, 43)";
        facility[i].style.boxShadow = "0px 0px 1px 1px rgb(255, 0, 43)";
    }
    
    if(turno=="matheusmo"){
        facility[0].disabled = true;
        facility[1].disabled = true;
        facility[0].style.cursor = "not-allowed";
        facility[1].style.cursor = "not-allowed";
        facility[0].style.color = "rgba(255, 255, 255, 0.3)";
        facility[1].style.color = "rgba(255, 255, 255, 0.3)";
        facility[0].style.backgroundColor = "rgba(67, 67, 67, 0.3)";
        facility[1].style.backgroundColor = "rgba(67, 67, 67, 0.3)";
        facility[0].style.border = "0px solid rgb(67, 67, 67, 0.3)";
        facility[1].style.border = "0px solid rgb(67, 67, 67, 0.3)";
        facility[0].style.boxShadow = "0px 0px 0px 0px rgb(255, 0, 43)";
        facility[1].style.boxShadow = "0px 0px 0px 0px rgb(255, 0, 43)";
    } else if(turno=="anniemo"){
        facility[0].disabled = false;
        facility[1].disabled = false;
        facility[1].style.color = "white";
        facility[1].style.backgroundColor = "black";
        facility[1].style.border = "1px solid rgb(255, 0, 43)";
        facility[0].style.color = "white";
        facility[0].style.backgroundColor = "black";
        facility[0].style.border = "1px solid rgb(255, 0, 43)";
        facility[0].style.cursor = "pointer";
        facility[1].style.cursor = "pointer";
        facility[1].style.boxShadow = "0px 0px 1px 1px rgb(255, 0, 43)";
        facility[0].style.boxShadow = "0px 0px 1px 1px rgb(255, 0, 43)";
    }
    
}

var turno = "anniemo"
var Anniemo = 10;
var Matheusmo = 10;
var apostaAnnie;
var apostaMatheus;
var apostaIPannie;
var apostaIPmatheus;
var GouP = 0;
var facility = document.getElementsByClassName('botoes');
var oponente = document.getElementById("opo");

function bolinhas(params,params1) {
    apostaAnnie = params;
    for(let i = 1+apostaAnnie; i <= Anniemo+1; i++){
        facility[i].style.border = "1px solid rgb(255, 0, 43)"
        facility[i].style.backgroundColor = "black";
        facility[i].style.color = "white"
    }
    
    for(let i = params1; i >= 2; i--){
        facility[i].style.border = "2px solid black"
        facility[i].style.backgroundColor = "rgb(255, 0, 43)"
        facility[i].style.color = "black"
    }

}

function apostarIouP(params) {
    apostaIPannie = params;
    if(params){
        facility[0].style.border = "2px solid black";
        facility[0].style.backgroundColor = "rgb(255, 0, 43)";
        facility[1].style.border = "1px solid #ff002b";
        facility[1].style.backgroundColor = "black";
    } else {
        facility[1].style.border = "2px solid black";
        facility[1].style.backgroundColor = "rgb(255, 0, 43)";
        facility[0].style.border = "1px solid #ff002b";
        facility[0].style.backgroundColor = "black";
    }
    
}
function jkl(params) {
    quadro[83].style.backgroundColor = "cyan";
}


function Jogar() {
   
   
    if((turno=="anniemo" || turno=="matheusmo") && apostaAnnie>0){
        if(apostaIPannie==1 || apostaIPannie==0){
            if(turno == "anniemo"){
                apostaMatheus = Math.floor(Math.random() * (Matheusmo) + 1);
                if(apostaMatheus>Anniemo){
                    apostaMatheus = Anniemo;
                }
                if((apostaIPannie==0 && apostaMatheus%2==0) || (apostaIPannie==1 && apostaMatheus%2!=0)){
                    document.getElementById("anuncio").innerText = "Você ganhou a rodada, minha princesa!";
                    document.getElementById("anuncio").style.color = "rgb(0, 162, 32)";
                    if(apostaAnnie>Matheusmo){
                        apostaAnnie = Matheusmo;
                    }
                    Matheusmo -= apostaAnnie;
                    for(let i = 1; i <= apostaAnnie; i++){
                        facility[i+Anniemo+1].disabled = false;
                        facility[i+Anniemo+1].style.color = "white";
                        facility[i+Anniemo+1].style.backgroundColor = "black";
                        facility[i+Anniemo+1].style.border = "1px solid rgb(255, 0, 43)";
                        facility[i+Anniemo+1].style.cursor = "pointer";
                        facility[i+Anniemo+1].style.boxShadow = "0px 0px 1px 1px rgb(255, 0, 43)";
                    }
                    Anniemo += apostaAnnie;
                    GouP = -apostaAnnie;
                    if(Matheusmo==0){
                        
                        fimdejogo();
                    } else {
                        
                        MudarTurno();
                    }
                } else{
                    document.getElementById("anuncio").innerText = "Você perdeu a rodada, bebezinha!";
                    document.getElementById("anuncio").style.color = "rgb(255, 0, 0)";
                    Matheusmo += apostaMatheus;
                    Anniemo -= apostaMatheus;
                    GouP = apostaMatheus;
                    for(let i = GouP+1; i > 1; i--){
                        facility[i+Anniemo].disabled = true;
                        facility[i+Anniemo].style.cursor = "not-allowed";
                        facility[i+Anniemo].style.color = "rgba(255, 255, 255, 0.3)";
                        facility[i+Anniemo].style.backgroundColor = "rgba(67, 67, 67, 0.3)";
                        facility[i+Anniemo].style.border = "0px solid rgb(67, 67, 67, 0.3)";
                        facility[i+Anniemo].style.boxShadow = "0px 0px 0px 0px black";
                    }
                    if(Anniemo==0){
                        
                        fimdejogo();
                    } else {
                        
                        MudarTurno();
                    }
                }

            } else if(turno=="matheusmo"){
                apostaMatheus = Math.floor(Math.random() * (Matheusmo) + 1);
                if(apostaMatheus>Anniemo){
                    apostaMatheus = Anniemo;
                }
                apostaIPmatheus = Math.floor(Math.random() * (2) + 0);
                if((apostaIPmatheus==0 && apostaAnnie%2==0) || (apostaIPmatheus==1 && apostaAnnie%2!=0)){
                    document.getElementById("anuncio").innerText = "Você perdeu a rodada, bebezinha!";
                    document.getElementById("anuncio").style.color = "rgb(255, 0, 0)";
                    Matheusmo += apostaMatheus;
                    Anniemo -= apostaMatheus;
                    GouP = apostaMatheus;
                    for(let i = GouP+1; i > 1; i--){
                        facility[i+Anniemo].disabled = true;
                        facility[i+Anniemo].style.cursor = "not-allowed";
                        facility[i+Anniemo].style.color = "rgba(255, 255, 255, 0.3)";
                        facility[i+Anniemo].style.backgroundColor = "rgba(67, 67, 67, 0.3)";
                        facility[i+Anniemo].style.border = "0px solid rgb(67, 67, 67, 0.3)";
                        facility[i+Anniemo].style.boxShadow = "0px 0px 0px 0px black";
                    }
                    if(Anniemo==0){
                        
                        fimdejogo();
                    } else {
                        
                        MudarTurno();
                    }
                } else {
                    document.getElementById("anuncio").innerText = "Você ganhou a rodada, minha princesa!";
                    document.getElementById("anuncio").style.color = "rgb(0, 162, 32)";
                    if(apostaAnnie>Matheusmo){
                        apostaAnnie = Matheusmo;
                    }
                    Matheusmo -= apostaAnnie;
                    for(let i = 1; i <= apostaAnnie; i++){
                        facility[i+Anniemo+1].disabled = false;
                        facility[i+Anniemo+1].style.color = "white";
                        facility[i+Anniemo+1].style.backgroundColor = "black";
                        facility[i+Anniemo+1].style.border = "1px solid rgb(255, 0, 43)";
                        facility[i+Anniemo+1].style.cursor = "pointer";
                        facility[i+Anniemo+1].style.boxShadow = "0px 0px 1px 1px rgb(255, 0, 43)";
                    }
                    Anniemo += apostaAnnie;
                    GouP = -apostaAnnie;
                    if(Matheusmo==0){
                        
                        fimdejogo();
                    } else {
                        
                        MudarTurno();
                    }
                }
            }
        }else{
            alert("Você precisa apostar Ímpar ou Par, meu bemzinho!")
        }
    } else {
        alert("Você precisa apostar um número de bolinhas, meu amor!");
    }
    
    
    //Math.random() * (max - min) + min;

}

function fimdejogo() {
    document.getElementById("btnjogar").style.display = "None";
    document.getElementById("btnrei").style.display = "inline-block";
    if(Anniemo==20){
        document.getElementById("popupctt").innerText = "PARABÉNS, AMOR DA MINHA VIDA, VOCÊ GANHOU O JOGO!"
        document.getElementById("A").innerText += "Você ganhou todas as bolinhas de mim Matheusmo e venceu o jogo. Agora corra para me dar infinitos beijos puri voze me ganhou han"
        document.getElementById("A").innerHTML += `&nbsp&nbsp<img src="assets/emojimocionado.png" width="20px" height="20px" alt="">`
    } else {
        document.getElementById("popupctt").innerText = "Poxa, princesa da minha vida, você perdeu o jogo!"
        document.getElementById("A").innerText += "Mas não si entristeça meu mundo! Jogue novamente e venha correndo para os meu braços para eu lhe encher com infinitos bilhões de beijos"
        document.getElementById("A").innerHTML += `&nbsp&nbsp<img src="assets/emojimaoboca.png" width="25px" height="25px" alt="">`
    }
    popup();
    
}

function reloadpage() {
    window.location.reload();
}

//<button class="btn" onclick="MudarPagina('preteste.html')">Quiz do Relacionamento</button><br><br>