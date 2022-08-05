const navbar = document.querySelector('nav');
const htmlElement = document.querySelector('html');
const topElement = document.querySelector('.top');
let currentOpacity; 
window.addEventListener('scroll', () =>{
    
    /* final currentOpacity will be from 0-1 incrementing by 
    .1 depending on scroll position. */
    currentOpacity  = -topElement.clientHeight - htmlElement.scrollTop - 200;
    currentOpacity = currentOpacity / 100 * .25;
    currentOpacity = Math.abs(currentOpacity) - 1;
    
    
    if(currentOpacity < 1){
        disappearNav();
    }
     //limits opacity to no less than .4 and no more than 1
    if(currentOpacity <= .4){
        currentOpacity = .4;
    }else if(currentOpacity >=1){
        currentOpacity = 1;
        changeNav();
    }
    
    topElement.style.backgroundColor = `hsla(30, 100%, 50%,${currentOpacity})`;
    

});

const changeNav = ()=>{
    navbar.style.backgroundColor = `hsla(30, 100%, 50%,1)`;
    
}
const disappearNav = ()=>{
    navbar.style.backgroundColor = `hsla(30, 100%, 50%,0)`;
    
}