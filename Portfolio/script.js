let speed = 50;
let username = document.querySelector("#username");
let role = document.querySelector("#role");
let uname = "This is Selvakavin,";
let userrole = "I'm a Software Developer."
let i = 0, j = 0;
(() => { typeWriter();})();

function typeWriter() {
    if (i < uname.length) {
        username.innerHTML += uname.charAt(i++);
        setTimeout(typeWriter, speed);
    }
    else if (j < userrole.length) {
        role.innerHTML += userrole.charAt(j++);
        setTimeout(typeWriter, speed + 20);
    }
}

let menu = document.querySelector("#menu");
let sidebar = document.querySelector(".sidebar");
let sidebarClose = document.querySelector(".sidebar__close i");
menu.addEventListener('click', () => {
    sidebar.style.width = "200px";
    menu.style.visibility = "hidden";
});
sidebarClose.addEventListener('click', () => {closeSidebar();});
 function closeSidebar() {
    sidebar.style.width = "0";
    menu.style.visibility = "visible";
 }

 function themeChange(){
    let theme=document.querySelector("#theme");
    let element=theme.children[0];
    let id=theme.children[0].id;
    let body=document.querySelector("#body");
    let contact=document.querySelector(".contact");
    let themeStatus=document.querySelector("#themestatus");
    if(id=="dark"){
        id="light";
        theme.style.backgroundColor="black";
        body.style.backgroundColor="white";
        contact.style.color="black";
        themeStatus.style.color="white";
    }
    else{
        id="dark";
        theme.style.backgroundColor="white";
        body.style.backgroundColor="rgba(0, 0, 0, 0.74)";
        contact.style.color="white";
        themeStatus.style.color="black";
    }
    element.setAttribute("id",id);
    themeStatusChange();
 }
 function themeStatusChange() {
    let id=document.querySelector("#theme").children[0].id;
    let themeStatus=document.querySelector("#themestatus");
    themeStatus.textContent=id=="dark"?"dark theme":"light theme";
 }

 window.addEventListener('contextmenu', function(event) {
    alert('Right is disabled.')
    event.preventDefault();
});