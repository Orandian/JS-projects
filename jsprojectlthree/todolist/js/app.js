//UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const todoul = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem("todos"));
// console.log(typeof todos);
if(todos){
    todos.forEach(todo => addtodo(todo));
}

formel.addEventListener('submit',(e)=>{
    addtodo();

    e.preventDefault();
});

function addtodo(todo){
    let todotext = inputel.value;

    if(todo){
        todotext = todo.text;
    }

    if(todotext){
        const li = document.createElement('li');

        if(todo && todo.complete){
            // add class
            li.classList.add("completed");
        }

        li.appendChild(document.createTextNode(todotext));
        todoul.appendChild(li);
        inputel.value= '';

        //add to localstorage
        updatelocalstorage();

        //add line-through by left click
        li.addEventListener('click',()=>{
            li.classList.toggle('completed');
            updatelocalstorage();
        });

        // remove by rightclick
        li.addEventListener('contextmenu',(e)=>{
            li.remove();
            updatelocalstorage();

            e.preventDefault();
        });

    }else{
        window.alert("Enter Your To Dos")
    }
};

function updatelocalstorage(){
    todolis = document.querySelectorAll('li');

    const todos = [];

    todolis.forEach(todoli => {
        todos.push({
            text: todoli.innerText,
            complete: todoli.classList.contains('completed')
        })
    });

    localStorage.setItem('todos',JSON.stringify(todos));
};

