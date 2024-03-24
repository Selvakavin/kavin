let speed = 90;
let username = document.querySelector("#username");
let role = document.querySelector("#role");
let uname = "This is Selvakavin,";
let userrole = "I'm a Software Developer"
let i = 0, j = 0;
(() => {
    emailjs.init("L2_Itcb8bwF_Mo8H2");
    typeWriter();
})();

function typeWriter() {
    if (i < uname.length) {
        username.innerHTML += uname.charAt(i++);
        setTimeout(typeWriter, speed);
    }
    else if (j < userrole.length) {
        role.innerHTML += userrole.charAt(j++);
        setTimeout(typeWriter, speed + 20);
    }
    else {
        repeatTypeWriter();
    }
}

function repeatTypeWriter() {
    if (j == 5) role.innerHTML = "I'm a";
    if (j < userrole.length) {
        role.innerHTML += userrole.charAt(j++);
        setTimeout(repeatTypeWriter, 100);
    } else {
        j = 5;
        setTimeout(repeatTypeWriter, 1000);
    }
}

let menu = document.querySelector("#menu");
let sidebar = document.querySelector(".sidebar");
let sidebarClose = document.querySelector(".sidebar__close i");
menu.addEventListener('click', () => {
    sidebar.style.width = "200px";
    menu.style.visibility = "hidden";
});

sidebarClose.addEventListener('click', () => { closeSidebar(); });
function closeSidebar() {
    sidebar.style.width = "0";
    menu.style.visibility = "visible";
}

function themeChange() {
    let theme = document.querySelector("#theme");
    let element = theme.children[0];
    let id = theme.children[0].id;
    let body = document.querySelector("#body");
    let contact = document.querySelector(".contact");
    let themeStatus = document.querySelector("#themestatus");
    if (id == "dark") {
        id = "light";
        theme.style.backgroundColor = "black";
        body.style.backgroundColor = "white";
        contact.style.color = "black";
        themeStatus.style.color = "white";
    }
    else {
        id = "dark";
        theme.style.backgroundColor = "white";
        body.style.backgroundColor = "rgba(0, 0, 0, 0.74)";
        contact.style.color = "white";
        themeStatus.style.color = "black";
    }
    element.setAttribute("id", id);
    themeStatusChange();
}
function themeStatusChange() {
    let id = document.querySelector("#theme").children[0].id;
    let themeStatus = document.querySelector("#themestatus");
    themeStatus.textContent = id == "dark" ? "dark theme" : "light theme";
}

window.addEventListener('contextmenu', function (event) {
     alert('Right is disabled.')
     event.preventDefault();
});


function sendEmail(event) {
    event.preventDefault();
    const to = document.querySelector("#EmailId");
    const name = document.querySelector("#EmailName");
    const mobile = document.querySelector("#EmailMobile");
    const desc = document.querySelector("#EmailDesc");

    if(name.value.length<3 || to.value.length<5 || desc.value.length<10){
        alert('Please enter the valid data.')
        return;
    }

    let msg=`Dear ${name.value},

    Thank you for reaching out to me through portfolio Contact Us form. I have received your message and appreciate the time you took to contact me.
    
    I will get back to you as soon as possible.
    
    If you have any urgent inquiries or require immediate assistance, please don't hesitate to contact me directly at +91 9360148930.
    
    I appreciate your patience and look forward to assisting you further.

    Reason for Connected:
    ${desc.value}
    
    Thanks & Regards,
    Selvakavin S`;
    

    emailjs.send("service_g5ahr07", "template_0urgoue", {
        message: msg,
        subject: " Submission Confirmation: Contact Us Form Received",
        to_email: to.value
    }).then(() => {
        to.value="";
        name.value="";
        mobile.value="";
        desc.value="";
        alert('we have received the your information');
    },
    (error) => {
        alert(`sorry, we didn't received the your information, can you please fill the form once again. thanks`);
        })
}