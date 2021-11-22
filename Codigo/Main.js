let exp1 = "Programa que reúne vários estudantes de diferentes cursos, oferece um treinamento adequadoe os deixa responsaveis por definir, validar e prototipar uma solução para o problema proposto pela empresa patrocinadora.";
let exp2 = "Responsável por prestar suporte técnico de nível 1 à clientes em relação aos softwares oferecidos pela empresa. O suporte é realizado através de telefone, email, chat ou presencialmente.";

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
