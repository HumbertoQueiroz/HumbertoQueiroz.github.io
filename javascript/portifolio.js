var descricaoHTML = document.getElementById('descricao__html');
var descricaoCSS = document.getElementById('descricao__css');
var descricaoJS = document.getElementById('descricao__javascript');
var descricaoBootstraps = document.getElementById('descricao__bootstraps');
var buttonHTML = document.getElementById('button__html');
console.log(descricaoHTML);
console.log(descricaoCSS);
console.log(descricaoJS);
console.log(descricaoBootstraps);

function exibeDescricao(e) {
    console.log("entrou");
    switch (e) {
        case 'html':
            console.log("entrou");
            descricaoHTML.style.display = 'inline';
            descricaoCSS.style.display = 'none';
            descricaoJS.style.display = 'none';
            descricaoBootstraps.style.display = 'none';
            buttonHTML.style.color = '#fff';
            break;
        case 'css':
            descricaoHTML.style.display = 'none';
            descricaoCSS.style.display = 'inline';
            descricaoJS.style.display = 'none';
            descricaoBootstraps.style.display = 'none';
            break;
        case 'js':
            descricaoHTML.style.display = 'none';
            descricaoCSS.style.display = 'none';
            descricaoJS.style.display = 'inline';
            descricaoBootstraps.style.display = 'none';
            break;
        case 'bootstraps':
            descricaoHTML.style.display = 'none';
            descricaoCSS.style.display = 'none';
            descricaoJS.style.display = 'none';
            descricaoBootstraps.style.display = 'inline';
            break;
    }
}
