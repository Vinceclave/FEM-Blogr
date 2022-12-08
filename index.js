const navOpen = document.querySelector(".nav-close");
const mainNav = document.querySelector(".main_nav");
const body = document.querySelector("body")
navOpen.addEventListener('click', function(){
    mainNav.classList.toggle('show_nav');
    body.classList.toggle('body-hidden');
})


const menuToggle = document.querySelectorAll(".menu-title");
console.log(menuToggle);
const arrow = document.querySelector(".arrow");
const subMenu = document.querySelector(".sub-menu");


function hideAll(){
  menuToggle.forEach(e => {
    let nextSibling = e.nextSibling;
    while(nextSibling && nextSibling.nodeType != 1) {
    nextSibling = nextSibling.nextSibling}

     nextSibling.classList.remove("submenu-hidden");
       
     
         
  });
}

menuToggle.forEach(el => el.addEventListener('click', function(){
let nextSibling = this.nextSibling;
while(nextSibling && nextSibling.nodeType != 1) {
    nextSibling = nextSibling.nextSibling}
if(this.classList.contains("active")){
nextSibling.classList.remove("submenu-hidden");
  this.classList.remove("active");
  return;
}
    hideAll();
  
    this.classList.add("active");
    nextSibling.classList.add("submenu-hidden");

}));

