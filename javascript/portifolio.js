/*Mostrar descrição dos conhecimnetos no card do lado direito no container
dos conhecimentos*/

var descricaoHTML = document.getElementById('descricao__html');
var descricaoCSS = document.getElementById('descricao__css');
var descricaoJS = document.getElementById('descricao__javascript');
var descricaoBootstraps = document.getElementById('descricao__bootstraps');
var descricaoGithub = document.getElementById('descricao__github');
var buttonHTML = document.getElementById('button__html');
var buttonCss = document.getElementById('button__css');
var buttonJs = document.getElementById('button__js');
var buttonBootstraps = document.getElementById('button__bootstraps');
var buttonGithub = document.getElementById('button__github');

function exibeDescricao(e) {
    switch (e) {
        case 'html':
            descricaoHTML.style.display = 'inline';
            descricaoCSS.style.display = 'none';
            descricaoJS.style.display = 'none';
            descricaoBootstraps.style.display = 'none';
            descricaoGithub.style.display = 'none';
            buttonHTML.style.color = '#fff';
            buttonHTML.style.fontWeight = '900';
            buttonHTML.style.textDecoration = 'underline';
            buttonCss.style.color = '';
            buttonCss.style.fontWeight = '';
            buttonCss.style.textDecoration = '';
            buttonJs.style.color = '';
            buttonJs.style.fontWeight = '';
            buttonJs.style.textDecoration = '';
            buttonBootstraps.style.color = '';
            buttonBootstraps.style.fontWeight = '';
            buttonBootstraps.style.textDecoration = '';
            buttonGithub.style.color = '';
            buttonGithub.style.fontWeight = '';
            buttonGithub.style.textDecoration = '';
            break;
        case 'css':
            descricaoHTML.style.display = 'none';
            descricaoCSS.style.display = 'inline';
            descricaoJS.style.display = 'none';
            descricaoBootstraps.style.display = 'none';
            descricaoGithub.style.display = 'none';
            buttonHTML.style.color = '';
            buttonHTML.style.fontWeight = '';
            buttonHTML.style.textDecoration = '';
            buttonCss.style.color = '#fff';
            buttonCss.style.fontWeight = '900';
            buttonCss.style.textDecoration = 'underline';
            buttonJs.style.color = '';
            buttonJs.style.fontWeight = '';
            buttonJs.style.textDecoration = '';
            buttonBootstraps.style.color = '';
            buttonBootstraps.style.fontWeight = '';
            buttonBootstraps.style.textDecoration = '';
            buttonGithub.style.color = '';
            buttonGithub.style.fontWeight = '';
            buttonGithub.style.textDecoration = '';
            break;
        case 'js':
            descricaoHTML.style.display = 'none';
            descricaoCSS.style.display = 'none';
            descricaoJS.style.display = 'inline';
            descricaoBootstraps.style.display = 'none';
            descricaoGithub.style.display = 'none';
            buttonHTML.style.color = '';
            buttonHTML.style.fontWeight = '';
            buttonHTML.style.textDecoration = '';
            buttonCss.style.color = '';
            buttonCss.style.fontWeight = '';
            buttonCss.style.textDecoration = '';
            buttonJs.style.color = '#fff';
            buttonJs.style.fontWeight = '900';
            buttonJs.style.textDecoration = 'underline';
            buttonBootstraps.style.color = '';
            buttonBootstraps.style.fontWeight = '';
            buttonBootstraps.style.textDecoration = '';
            buttonGithub.style.color = '';
            buttonGithub.style.fontWeight = '';
            buttonGithub.style.textDecoration = '';
            break;
        case 'bootstraps':
            descricaoHTML.style.display = 'none';
            descricaoCSS.style.display = 'none';
            descricaoJS.style.display = 'none';
            descricaoBootstraps.style.display = 'inline';
            descricaoGithub.style.display = 'none';
            buttonHTML.style.color = '';
            buttonHTML.style.fontWeight = '';
            buttonHTML.style.textDecoration = '';
            buttonCss.style.color = '';
            buttonCss.style.fontWeight = '';
            buttonCss.style.textDecoration = '';
            buttonJs.style.color = '';
            buttonJs.style.fontWeight = '';
            buttonJs.style.textDecoration = '';
            buttonBootstraps.style.color = '#fff';
            buttonBootstraps.style.fontWeight = '900';
            buttonBootstraps.style.textDecoration = 'underline';
            buttonGithub.style.color = '';
            buttonGithub.style.fontWeight = '';
            buttonGithub.style.textDecoration = '';
            break;
        case 'github':
            descricaoHTML.style.display = 'none';
            descricaoCSS.style.display = 'none';
            descricaoJS.style.display = 'none';
            descricaoBootstraps.style.display = 'none';
            descricaoGithub.style.display = 'inline';
            buttonHTML.style.color = '';
            buttonHTML.style.fontWeight = '';
            buttonHTML.style.textDecoration = '';
            buttonCss.style.color = '';
            buttonCss.style.fontWeight = '';
            buttonCss.style.textDecoration = '';
            buttonJs.style.color = '';
            buttonJs.style.fontWeight = '';
            buttonJs.style.textDecoration = '';
            buttonBootstraps.style.color = '';
            buttonBootstraps.style.fontWeight = '';
            buttonBootstraps.style.textDecoration = '';
            buttonGithub.style.color = '#fff';
            buttonGithub.style.fontWeight = '900';
            buttonGithub.style.textDecoration = 'underline';
            break;
    }
}

/* mostra Menu no mobile*/
var menu = document.getElementById('mostraMenu');
var controleMenu = true;
var larguraDaTela = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log(larguraDaTela);
function MostraMenu() {
    if(larguraDaTela<950){
        if (controleMenu == true) {
            menu.style.display = 'inline';
            controleMenu = false;
        } else {
            menu.style.display = 'none';
            controleMenu = true;
        }
    }    
}






/*Função mostra mais projetos*/
var iconeMostrarMais = document.getElementById('mostrarMais');
var iconeMostrarMenos = document.getElementById('mostrarMenos');
var demaisProjetos = document.getElementById('demaisProjetos');
var containerVisivel = false;

function mostraMais(e) {
    console.log(iconeMostrarMais.style.display);
    if (containerVisivel == false) {
        console.log('entrou no if');
        iconeMostrarMais.style.display = 'none';
        iconeMostrarMenos.style.display = 'inline';
        demaisProjetos.style.display = 'inline';
        containerVisivel = true;
    } else {
        iconeMostrarMais.style.display = 'inline';
        iconeMostrarMenos.style.display = 'none';
        demaisProjetos.style.display = 'none';
        containerVisivel = false;
    }

    
}