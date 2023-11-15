const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilos = getComputedStyle(document.body);
const CorDeFundo = estilos.backgroundColor;

// console.log(CorDeFundo)

for ( let p of ps){
    p.style.backgroundColor = CorDeFundo;
    p.style.color = 'white';
}