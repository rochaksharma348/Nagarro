let btn = document.querySelector('#button-addon2');
let ul = document.querySelector('#myUl');
let input = document.querySelector('input');

console.dir(btn);

let addTask = () => {
    let li = document.createElement('li');
    li.innerText = input.value;
    if (input.value === "") return;
    li.classList.add("list-group-item");
    li.style.backgroundColor = 'rgb(214, 237, 243)';

    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add('fa', 'fa-trash', 'deleteBtn');

    deleteBtn.addEventListener('click', () => {
        let parent = deleteBtn.parentNode;
        ul.removeChild(parent);
    });

    li.addEventListener('click', () => {
        li.classList.add("list-group-item-success");
        li.style.color = 'white';
        li.style.backgroundColor = 'rgb(34, 180, 34)';
        li.style.textDecoration = 'line-through';

        if (!li.innerHTML.startsWith('<i')) {
            let tickButton = document.createElement('i');
            tickButton.classList.add('fa', 'fa-check');
            li.prepend(tickButton);
        }
    })

    li.appendChild(deleteBtn);
    
    ul.appendChild(li);
    input.textContent = '';
}

btn.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
})


