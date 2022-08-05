const navbar = document.querySelector('nav');
const htmlElement = document.querySelector('html');
const topElement = document.querySelector('.top');
const height = topElement.clientHeight;
let currentOpacity = .4;    
window.addEventListener('scroll', () =>{
    
    currentOpacity  = -topElement.clientHeight - htmlElement.scrollTop - 200;
    currentOpacity = currentOpacity / 100 * .25;
    currentOpacity = Math.abs(currentOpacity) - 1;
    if(currentOpacity < 1){
        disappearNav();
    }
    
    if(currentOpacity <= .4){
        currentOpacity = .4;
        console.log('here');
    }else if(currentOpacity >=1){
        currentOpacity = 1;
        changeNav();
    }
    console.log(currentOpacity);
    topElement.style.backgroundColor = `hsla(30, 100%, 50%,${currentOpacity})`;
    

});

const changeNav = ()=>{
    navbar.style.backgroundColor = `hsla(30, 100%, 50%,1)`;
    
}
const disappearNav = ()=>{
    navbar.style.backgroundColor = `hsla(30, 100%, 50%,0)`;
    
}