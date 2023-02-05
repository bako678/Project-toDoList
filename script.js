const form = document.querySelector('#list-form');
const inputBox = document.querySelector('#note-name');
const listEl = document.querySelector('#tasks');

var arr = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Submitted")
    const textTask = inputBox.value;
    if (!textTask) {
        alert('Xahiş edirik, mətn daxil edin');
        return;
    }
    

    const taskEl = document.createElement('div');
    taskEl.classList.add('task');

    const taskContentEl = document.createElement('div');
    taskContentEl.classList.add('content');
    const taskActionsEl = document.createElement('div');
    taskActionsEl.classList.add('actions');

    taskEl.appendChild(taskContentEl);
    taskEl.appendChild(taskActionsEl);

    

    const taskInputEl = document.createElement('input');
    taskInputEl.classList.add('text');
    taskInputEl.type = "text";
    taskInputEl.value = textTask;
    taskInputEl.setAttribute("readonly", "readonly");

    
    

    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.classList.add('delete');
    taskDeleteBtn.innerText = "X";

     
    if(arr.length<5){
        taskContentEl.appendChild(taskInputEl);
        taskActionsEl.appendChild(taskDeleteBtn);
        arr.push(taskInputEl);
    }
   
    listEl.appendChild(taskEl);

    inputBox.value = "";

    taskDeleteBtn.addEventListener("click",()=>{
        taskInputEl.remove();
        taskDeleteBtn.remove();
        arr.pop(taskInputEl);
    })


    
})








