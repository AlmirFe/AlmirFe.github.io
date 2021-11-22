let exp1 = "minha experiencia 1";
let exp2 = "minha experiencia 2";

function info(opcao){
    let cardInfo = document.createElement('div');
    let titulo = document.createElement('h2');
    let texto = opcao == 1 ? document.createTextNode(exp1) : document.createTextNode(exp2);
    let container = document.createElement('div');
    let botao = document.createElement('button');
    let textInfo = document.createElement('div');


    cardInfo.setAttribute('class', 'info');
    container.setAttribute('id', 'containerInfo');
    textInfo.setAttribute('class', 'textInfo');
    botao.textContent = 'Sair';
    botao.addEventListener('click', function(){ console.log('remover'); let conteudo = document.getElementById('containerInfo'); conteudo.parentNode.removeChild(conteudo);});
    titulo.textContent = "Detalhes";

    textInfo.appendChild(texto);

    cardInfo.appendChild(titulo);
    cardInfo.appendChild(textInfo);
    cardInfo.appendChild(botao);
    
    container.appendChild(cardInfo);

    console.log(texto);
    document.body.appendChild(container);
}
info(2)
