(function(){
    
    function gi(id)
    {
        return document.getElementById(id);
    }

    const users = [];
    const form = gi('todo-form');
    
    document.addEventListener('DOMContentLoaded', on_init);

    function on_init()
    {
        gi('button-add').addEventListener('click', on_add_todo);
        form.addEventListener('submit', on_submit);

        Promise
            .all([get_users_from_server(), get_todo_from_server()])
            .then(values => {
                const [l_users, todos] = values;
                
                for(let i = 0, j = l_users.length; i < j; i++)
                {
                    users.push({id: l_users[i].id, name: l_users[i].name});
                }
                
                show_users(users);
                show_todos(todos);
            })
    }
    
    function on_submit(ev)
    {
        ev.preventDefault();

        return false;
    }

    function on_add_todo(ev)
    {
        const todo = gi('new-todo');
        const user = gi('user-todo');
        
        if(todo.value && Number(user.value))
        {
            console.log(user.value, todo.value);

            fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: todo.value,
                userId: user.value,
                completed: false
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
            .then((response) => response.json())
            .then((json) => show_todo(json.id, json.userId, json.title, json.completed) );
        }
        
        return false;
    }

    function show_users(users)
    {
        const list_users = gi('user-todo');
        
        for(let i = 0, j = users.length; i < j; i++)
        {
            const option = document.createElement('option');
            
            option.value = users[i].id;
            option.innerText = users[i].name;
            list_users.appendChild(option);
        }
    }
    
    function show_todo(todo_id, user_id, todo_text, status)
    {
        const ul = gi('todo-list');
        const li = document.createElement('li');

        li.className = 'todo-item';
        li.innerHTML = todo_text + ' <i>by</i> <b>' + get_user_name(user_id).name  + '' ;
        li.dataset.id = todo_id;

        const input = document.createElement('input');

        input.type = 'checkbox';
        input.checked = status;
        input.onchange = on_check;

        li.prepend(input);

        const close = document.createElement('span');

        close.innerHTML = '&times;';
        close.onclick = on_close;

        li.appendChild(close);

        ul.prepend(li);
    }

    function on_close(ev)
    {
        const el = ev.target || ev.srcElement;

        fetch('https://jsonplaceholder.typicode.com/posts/' + el.parentNode.dataset.id, {
            method: 'DELETE',
          })
          .then(resp => el.parentNode.remove());
    }

    function on_check(ev)
    {
        const el = ev.target || ev.srcElement;

        fetch('https://jsonplaceholder.typicode.com/posts/' + el.parentNode.dataset.id, {
            method: 'PATCH',
            body: JSON.stringify({
              completed: el.checked,
            }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    function get_user_name(user_id)
    {
       return users.find(x => x.id === Number(user_id));
    }
    
    function get_users_from_server()
    {
        return fetch('https://jsonplaceholder.typicode.com/users').then(resp => resp.json());
    }

    function get_todo_from_server()
    {
        return fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(resp => resp.json());
    }

    function show_todos(items)
    {
        //console.log(items);
        for(let i = 0, j = items.length; i < j; i++)
        {
            show_todo(items[i].id, items[i].userId, items[i].title, items[i].completed);
        }
    }
}())
