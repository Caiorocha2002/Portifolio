const superTrunfo = { // criando objeto (o ptojeto))
    imagem: '<a class="linkProjeto" href="https://caiorocha2002.github.io/Super-Trunfo/" target="_blank">' + "<img class='img' src='./pasta.img/sptrunfo.jpeg'>" + "</a>",
    text: "<p class='paragrafo'>" + "Super trunfo :" + " <br>" + "feito na ImersãoDev Alura." + "(HTML,CSS, JavaScript)" + "</p>"

};
const tabelaDeJogos = {
    imagem: '<a class="linkProjeto" href="https://codepen.io/caio-rocha-the-looper/pen/ZEvYoZW" target="_blank">' + "<img class='img' src='./pasta.img/tabelaimg.jpeg'>",
    text: "<p class='paragrafo'> " + "Tabela de Jogo:" + "<br>" + "feito na ImersãoDev Alura." + "<br>" + "(HTML,CSS,JavaScript)." + "</p>",


}
const calculadorIMC = {
    imagem: '<a class="linkProjeto" href="https://caiorocha2002.github.io/calculadorIMC/" target="_blank">' + "<img class='img' src='./pasta.img/calculadoraIMC.jpeg'/>",
    text: "<p class='paragrafo'> " + "calcule seu IMC:" + "<br>" + "projeto pessoal." + "<br>" + "(HTML,CSS,JavaScript)." + "</p>",


}
const mentalista = {
    imagem: '<a class="linkProjeto" href="https://codepen.io/caio-rocha-the-looper/pen/abVezgP" target="_blank">' + "<img class='img' src='./pasta.img/imgProjeto2.jpeg'/>",
    text: "<p class='paragrafo'> " + "joguinho Mentalista:" + "<br>" + "feito na imersão Dev alura." + "<br>" + "(HTML,CSS,JavaScript)." + "</p>",


}
const ladingPage = {
    imagem: '<a class="linkProjeto" href="https://caiorocha2002.github.io/LaidingPagetreino/ladingPage.html" target="_blank">' + "<img class='img' src='./pasta.img/ladingPage.jpeg'/>",
    text: "<p class='paragrafo'> " + "Lading Page Vendas:" + "<br>" + "Projeto pessoal." + "<br>" + "(HTML,CSS,JavaScript)." + "</p>",


}


//arry de projetos
const projetos = [superTrunfo, tabelaDeJogos, calculadorIMC, mentalista, ladingPage]


// li com o estilo no css ja preparado
const liProjetoSp = " <li class='sPTrunfo'> ";


function lego(imagem, descricao, ) { // função recebendo a img, descrição e o link do projeto

    const elementoProjeto = document.getElementById("projetos"); // identificando a minha div do html com id

    const montado = liProjetoSp + imagem + descricao + "</li>"; // montando o projeto 

    elementoProjeto.innerHTML = elementoProjeto.innerHTML + montado; // adicionando projeto montado no html


};
// adicionando os elementos no parametro da função
lego(superTrunfo.imagem, superTrunfo.text);
lego(tabelaDeJogos.imagem, tabelaDeJogos.text);
lego(calculadorIMC.imagem, calculadorIMC.text);
lego(mentalista.imagem, mentalista.text);
lego(ladingPage.imagem, ladingPage.text);

