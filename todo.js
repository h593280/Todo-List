//wait to page loaded
window.addEventListener('load', () => {

const form = document.querySelector('#new-task-form');
const input = document.querySelector('#input-task');
const list_elements = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
    
    //prevent refresh of page
    e.preventDefault();

    const task = input.value;

    if(!task){
       alert("Fill out the task");
       return; 
    } 

    //div
    const task_elements = document.createElement("div");
    task_elements.classList.add("task");

    const task_content_elements = document.createElement("div");
    task_content_elements.classList.add("content");

    //appendChild
    task_elements.appendChild(task_content_elements);

    //input
    const task_input_elements = document.createElement("input");
    task_input_elements.classList.add("text");
    task_input_elements.type = "text";
    task_input_elements.value = task;
    task_input_elements.setAttribute("readonly", "readonly");

    task_content_elements.appendChild(task_input_elements);

    //buttons
    const task_actions_elements = document.createElement("div");
    task_actions_elements.classList.add("actions");

    const task_edit_elements = document.createElement("button");
    task_edit_elements.classList.add("edit");
    task_edit_elements.innerHTML = "Edit";

    const task_delete_elements = document.createElement("button");
    task_delete_elements.classList.add("delete");
    task_delete_elements.innerHTML = "Delete";

    task_actions_elements.appendChild(task_edit_elements);
    task_actions_elements.appendChild(task_delete_elements);

    task_elements.appendChild(task_actions_elements);

    list_elements.appendChild(task_elements);


    input.value = "";

    //edit-delete button
    task_edit_elements.addEventListener('click', () => {
        if(task_edit_elements.innerText.toLowerCase() == "edit") {
        task_input_elements.removeAttribute("readonly");
        task_input_elements.focus();
        task_edit_elements.innerText = "Save";
        } else {
            task_input_elements.setAttribute("readonly", "readonly");
            task_edit_elements.innerText = "Edit";
        }
        
    });

    task_delete_elements.addEventListener('click', () => {
        list_elements.removeChild(task_elements);
    });
 
});



});