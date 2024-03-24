(()=>{
    isTaskExist('initial');
})();
let addTask = document.querySelector(".addTask-btn");
addTask.addEventListener('click', () => {
    let addTaskValue = document.querySelector(".addTask-inp");

    if (addTaskValue.value.length < 3) {
        alert('This is not a valid task.');
        return;
    }
    isTaskExist('newtask');

    let code = `<div class="displayTask-ele">
    <div class="displayTask-ele-content">
        <h4 class="displayTask-ele--desc">${addTaskValue.value}</h4>
        <div class="displayTask-ele--options">
            <div class="displayTask-ele--options-btn">
                <button class="displayTask-ele--options-btn-edit" onclick="editTask(event)">Edit</button>
                <button class="displayTask-ele--options-btn-delete" onclick="deleteTask(event)" >Delete</button>
            </div>
        </div>
    </div>
</div>`;
    let container__displayTask = document.querySelector(".container__displayTask");
    container__displayTask.innerHTML = code + container__displayTask.innerHTML;
    addTaskValue.value = "";
});

let deleteButton = document.querySelector(".displayTask-ele--options-btn-delete");

function deleteTask(event) {
    let container__displayTask = document.querySelector(".container__displayTask");
    let deleteEleemnt = event.target.parentElement.parentElement.parentElement.parentElement;
    container__displayTask.removeChild(deleteEleemnt);
    isTaskExist('delete');
}

let container__displayTask = document.querySelector(".container__displayTask");
let editTaskElemenet = document.querySelector(".editTask");
let editTaskContent = document.querySelector(".editTask__content--inp");
let editableElement = '';
function editTask(event) {
    editTaskElemenet.style.width = "80%";
    editTaskElemenet.style.boxShadow = "0px 0px 0px 1px grey, 0px 0px 5px 1px";

    let editEleemnt = event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0];

    editableElement = editEleemnt;

    editTaskContent.value = editEleemnt.innerText;
}

function editAction(action) {
    if (action == 'save') {
        if( editTaskContent.value.length<3){
            alert("This is not a valid Task");
            return;
        }
        console.log(editableElement);
        editableElement.textContent = editTaskContent.value;
    }
    
    closeEditTask();
}

function closeEditTask() {
    editTaskElemenet.style.width = "0%";
    editTaskElemenet.style.boxShadow = "";
}

function isTaskExist(action) {
    let taskNotPresent=document.querySelector(".taskNotPresent");
    if(action=='initial'){
        taskNotPresent.style.display="flex";
    }
    else if(action=='delete' && container__displayTask.firstElementChild==undefined){
        taskNotPresent.style.display="flex";
    }
    else{
        taskNotPresent.style.display="none";
    }
}