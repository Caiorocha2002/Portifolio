const superTrunfo = { // criando objeto (o ptojeto))
    imagem: "<img class='img' src='/pasta.img/sptrunfo.jpeg'/>",
    text: "<a href='https://caiorocha2002.github.io/Super-Trunfo/'>" + "<p class='paragrafo'>" + "Super trunfo :" + " <br>" + "feito na ImersãoDev Alura." + "(HTML,CSS, JavaScript)" + "</p>"+"</a>",
    

};
const tabelaDeJogos = {
    imagem: "<img class='img' src='/pasta.img/tabelaimg.jpeg'/>",
    text: "<p class='paragrafo'> " + "Tabela de Jogo:" + "<br>" + "feito na ImersãoDev Alura." + "<br>" + "(HTML,CSS,JavaScript)." + "</p>",
    link: "#"

}
const calculadorIMC = {
    imagem: "<img class='img' src='/pasta.img/calculadoraIMC.jpeg'/>",
    text: "<p class='paragrafo'> " + "calcule seu IMC:" + "<br>" + "projeto pessoal." + "<br>" + "(HTML,CSS,JavaScript)." + "</p>",
    link: "#"

}
const mentalista = {
    imagem: "<img class='img' src='/pasta.img/imgProjeto2.jpeg'/>",
    text: "<p class='paragrafo'> " + "joguinho Mentalista:" + "<br>" + "feito na imersão Dev alura." + "<br>" + "(HTML,CSS,JavaScript)." + "</p>",
    link: "#"

}
//arry de projetos
const projetos = [superTrunfo, tabelaDeJogos, calculadorIMC,mentalista]

// li com o estilo no css ja preparado
const liProjetoSp = " <li class='sPTrunfo'> ";


function lego(imagem, descricao, link) { // função recebendo a img, descrição e o link do projeto

    const elementoProjeto = document.getElementById("projetos"); // identificando a minha div do html com id

    const montado = liProjetoSp + imagem + descricao + link +"</li>"; // montando o projeto 

    elementoProjeto.innerHTML = elementoProjeto.innerHTML + montado; // adicionando projeto montado no html


};
// adicionando os elementos no parametro da função
lego(superTrunfo.imagem, superTrunfo.text, superTrunfo.link);
lego(tabelaDeJogos.imagem, tabelaDeJogos.text);
lego(calculadorIMC.imagem, calculadorIMC.text);
lego(mentalista.imagem, mentalista.text);


