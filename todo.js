let tasks = []; // where the tasks will be kept
const btn = document.getElementById('button');
const btn2 = document.getElementById('taskbutton')
function myValue(){
let input = document.getElementById('todo').value;
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let input = document.getElementById('todo').value;
    if(input){
    tasks.push({
        id : Math.floor(Math.random() * 1000),
        task : input,
        completed : false
    });
    document.getElementById('todo').value = "";
    console.log(tasks)
    const createEL = document.createElement('li');
    tasks.map(
        item => {
            let taskName = item.task
            const innerhtml = createEL.innerHTML = 
            `<p id=${item.id}>
            <input id="checkbox"
            type="checkbox"
            onChange="myFunction(${item.id})"
            ${item.completed ? checked : null}/>
            ${taskName.trim()}
            <button
            onClick="removeTodo(${item.id})"
            ><i class="fas fa-trash"></i></button></p>`
        }
    )
    const parentEl = document.getElementById('todoList')
    parentEl.appendChild(createEL);
} else null});

btn2.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(tasks)
})

function myFunction(id){
    let todo = document.getElementById(id)
    todo.classList.toggle('completed');
}

function removeTodo(id){
    let todo = document.getElementById(id);
    todo.remove()
}