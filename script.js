const form = document.getElementById('new_task_form')
const input = document.getElementById('new_task_input')
const list_el = document.getElementById('task')


form.addEventListener('submit', (ev) =>{
    ev.preventDefault();

    const task = input.value;

    if (!task) {
        alert('Enter any value')
    }if (task) {
        const task_el = document.createElement('div')
        task_el.classList.add('task')

        const task_content = document.createElement('div')
        task_content.classList.add('content')

        const task_input = document.createElement('input')
        task_input.classList.add('text')
        task_input.type = 'text'
        task_input.value = task
        task_input.setAttribute('readonly', 'readonly')
        
        task_content.appendChild(task_input)

        task_el.appendChild(task_content)

        const task_actions = document.createElement('div')
        task_actions.classList.add('actions')

        const edit = document.createElement('button')
        edit.classList.add('edit')
        edit.innerHTML = 'Edit'

        const dlt = document.createElement('button')
        dlt.classList.add('dlt')
        dlt.innerHTML = 'Delete'

        task_actions.appendChild(edit)
        task_actions.appendChild(dlt)

        task_el.appendChild(task_actions)
        
        list_el.appendChild(task_el)

        input.value = "";

        edit.addEventListener('click', () =>{
            if(edit.innerHTML.toLowerCase() == 'edit'){
                edit.innerHTML = 'Save'        
                task_input.removeAttribute('readonly')
                task_input.focus()
            }else{
                edit.innerHTML = 'Edit'
                task_input.setAttribute('readonly', 'readonly')
            }
        });

        dlt.addEventListener('click', () =>{
            list_el.removeChild(task_el)
        });

    }

});