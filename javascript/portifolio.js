var descricaoHTML = document.getElementById('descricao__html');
var descricaoCSS = document.getElementById('descricao__css');
var descricaoJS = document.getElementById('descricao__javascript');
var descricaoBootstraps = document.getElementById('descricao__bootstraps');
var buttonHTML = document.getElementById('button__html');
var buttonCss = document.getElementById('button__css');
var buttonJs = document.getElementById('button__js');
var buttonBootstraps = document.getElementById('button__bootstraps');

function exibeDescricao(e) {
    switch (e) {
        case 'html':
            descricaoHTML.style.display = 'inline';
            descricaoCSS.style.display = 'none';
            descricaoJS.style.display = 'none';
            descricaoBootstraps.style.display = 'none';
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
            break;
        case 'css':
            descricaoHTML.style.display = 'none';
            descricaoCSS.style.display = 'inline';
            descricaoJS.style.display = 'none';
            descricaoBootstraps.style.display = 'none';
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
            break;
        case 'js':
            descricaoHTML.style.display = 'none';
            descricaoCSS.style.display = 'none';
            descricaoJS.style.display = 'inline';
            descricaoBootstraps.style.display = 'none';
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
            break;
        case 'bootstraps':
            descricaoHTML.style.display = 'none';
            descricaoCSS.style.display = 'none';
            descricaoJS.style.display = 'none';
            descricaoBootstraps.style.display = 'inline';
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
            break;
    }
}
