// Your code goes here
//1. Mouseover, "Fun Bus" turns red
const funBus = document.querySelector(".logo-heading")
funBus.addEventListener("mouseover", function( event ) {   
event.target.style.color = "red";}, false);
// 2.Keypress, pressing any key will change "Fun Bus"
document.addEventListener('keypress', logKey1);
function logKey1() {
funBus.textContent =  "FUN BUS!";
}
// 2.Keyup, releasing a key will change "Fun Bus" back
document.addEventListener('keyup', logKey2);
function logKey2() {
funBus.textContent =  "Fun Bus";
}
//4 Load, when page is loaded output to console
window.addEventListener('load', function(event){
console.log('page is fully loaded');
});
//5. focus, focusing on a nav will turn the background red
const navs = document.querySelector(".nav")
navs.addEventListener('focus', function(event){
event.target.style.background = "red";    
}, true);
//6.Mousedown, clicking on funBus will make it orange
funBus.addEventListener("mousedown", function( event ) {   
    event.target.style.color = "orange";}, false);
//7. Mouseup, when released changes to yellow
funBus.addEventListener("mouseup", function( event ) {   
    event.target.style.color = "yellow";}, false);
//8.Dblclick, double clicking on "Fun Bus" will turn it green
funBus.addEventListener("dblclick", function( event ) {   
event.target.style.color = "green";}, false);
//9.auxclick, when any aux mouse button is clicked "Fun Bus" turns purple
funBus.addEventListener("auxclick", function( event ) {   
    event.target.style.color = "purple";}, false);
//10. contextmenu, prevents context menu from appearing on "Fun Bus"
funBus.addEventListener('contextmenu', function(event){
    event.preventDefault();
  });
