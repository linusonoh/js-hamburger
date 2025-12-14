const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click' ,function(){
    if(navMenu.style.display === 'block'){
        navMenu.style.display = 'none';

}
    else {
        navMenu.style.display = 'block';}
    })