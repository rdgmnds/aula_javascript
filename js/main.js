//var nome = "Rodrigo" *****STRINGS******
//var idade = 20
//var idade2 = 20
//var frase = "Japão é o melhor time do mundo"
//alert("Bem-vindo, " + nome + "!")
//alert (nome + " tem " + idade + " anos")
//alert (idade+idade2)
//console.log (idade+idade2)
//console.log(nome)
//console.log (frase.replace("Japão" , "Brasil")) // trocar japao por brasil
//console.log(frase.toUpperCase()) // colocar a var frase toda em caixa alta
//console.log(frase.toLowerCase()) // colocar toda a var frase em caixa baixa
//console.log(idade*idade2) // multiplicar var idade pela var idade2

//var lista = ["maçã" , "uva" , "banana" , "manga"]; ******ARRAYS*****
//lista.push("morango"); // adc novo item na lista
//lista.pop() // tirar ultimo item da lista
//console.log(lista.length) // ver tamanho da lista
//console.log(lista.reverse()); // inverter ordem da lista
//console.log (lista); //ver lista
//console.log(lista.toString()); // transforma a lista em string
//console.log(lista[0]) // traz somente o primeiro item da lista
//console.log(lista.toString()[0]) // traz o primeiro item da string, que no caso é a letra m
//console.log(lista.join(" - ")) // muda o separador dos itens da lista

/*var fruta = {nome:"maçã" , cor:"vermelha"}; *******DICIONARIOS*******
console.log(fruta); // mostra o dicionario
console.log(fruta.nome) // retorna o valor do nome
var frutas = [{nome:"maçã" , cor:"vermelha"} , {nome:"banana" , cor:"amarela"}]; // lista de dicionarios
console.log(frutas[0].nome); // traz o nome do primeiro dicionario da lista
console.log(frutas[1].cor); // traz a cor do segundo dicionario da lista */

/*var idade = prompt("Informe sua idade") // cria caixa de pergunta *****CONDICIONAL*****
if (idade>=18) {
    alert("Bem-vindo!"); // se for maior que 18
}else{
    alert("Acesso somente para maiores de 18 anos"); // se for menor q 18
} */

/*var count; ******LAÇO DE REPETIÇÃO******
for(count=0; count<=5; count ++){ //vai adicionar 1 do 0 até o 5
    alert (count);
}
console.log (count) //mostra o count*/

//var d = new Date (); //*******DATE********
//alert (d.getDay());
//alert (d.getHours());
//alert (d.getMinutes());

/*function soma (n1,n2){ //declarou a funçao *****FUNCTIONS*****
    return n1+n2; //retorna n1+n2
}
alert (soma(5,5)); // retorna 10 pois sao n1 e n2 somados*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!"; //ao clicar no botao é escrito esse texto
 //   alert ("Obrigado por clicar"); //function para o botao html "Clique aqui"
}
function redirecionar(){
    window.open("https://app.foxbit.com.br/login"); //redirecionar para o link
}
function trocar (elemento){
   // document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse" //muda o texto depois de passar o mouse
   elemento.innerHTML = "Obrigado por passar o mouse"

}
function voltar (elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui" // sempre voltar para esse texto apos passar o mouse
    elemento.innerHTML = "Passe o mouse aqui"
}



