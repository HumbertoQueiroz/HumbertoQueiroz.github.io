const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
var imagens = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
var textoImg = ['Zom olho adulto','Nuvens', 'Flores','Heróglifos egípcios','Borboleta']
/*var textoImg = {
    'pic1.jpg' : 'Zom olho adulto', 
    'pic2.jpg' : 'Nuvens', 
    'pic3.jpg' :'Flores',
    'pic4.jpg' : 'Heróglifos egípcios',
    'pic5.jpg' : 'Borboleta'};*/
    function alteraImg (e){
        
        displayedImage.setAttribute('src', e.target.getAttribute('src'))
    }   



/* Declaring the alternative text for each image file */

/* Looping through images */
for (i=0;i<imagens.length;i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src','images/'+imagens[i]);
    newImage.setAttribute('alt', textoImg[i]);
    newImage.setAttribute('class', [i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', alteraImg);
}    



/* Wiring up the Darken/Lighten button */