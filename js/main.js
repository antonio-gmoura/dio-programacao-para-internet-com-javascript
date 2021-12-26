/*
//alert("meu primeiro js")

var nome = "Rafael Galleani"
//alert("Bem vindo " + nome);
console.log("Bem vindo " + nome.toLocaleUpperCase());
*/

/*
var idade = prompt("Qual sua idade?")
if (idade >= 18) {
    alert("maior de idade")
}else{
    alert("menor de idade")
}
*/

/*
var count = 0;
while (count <= 5){
    console.log("while: " + count);
    count ++
}

for (count = 0; count <= 5; count++) {
    console.log("for:" + count);
}
*/

/*
var d = new Date();
console.log(d);
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

console.log(soma(13, 7));
*/

function load(){
    console.log("Página carregada");
}

function button_onclick(){
    //alert("Obrigado por clicar");
    document.getElementById("agradecimento").innerHTML="Obrigado por clicar"
}

function agradecimento_onclick(){
    window.open("https://www.globo.com");
    //window.location.href = "https://www.globo.com";
}

function trocar(elemento){
    elemento.innerHTML="Obrigado por passar o mouse";
}

function voltar(elemento){
    elemento.innerHTML="Passe o mouse aqui";
}

function select_onchange(elemento){
    console.log(elemento.value);
}