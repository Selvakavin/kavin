var i = 0;
var role = 'Software Developer';
var speed = 100;
roleWriter();
function roleWriter() {
  if (i < role.length) {
    document.querySelector(".profilecardtitle-role").innerHTML += role.charAt(i);
    i++;    
    setTimeout(roleWriter, speed);
  }
  else{
    i=0;    
    setTimeout(()=>{
        document.querySelector(".profilecardtitle-role").innerHTML ="";
        roleWriter();
    }, speed+1000);    
  }
}

function enableSidebar() {
  document.querySelector(".sidebar").style.width="125px"; 
  document.querySelector(".sidebar-elements").style.boxShadow=" 0px 0px 1px 1px grey,0px 0px 5px 2px";
}

function closeSideBard() {
  document.querySelector(".sidebar").style.width="0"; 
  document.querySelector(".sidebar-elements").style.boxShadow=" 0px 0px 0px 0px ";
}