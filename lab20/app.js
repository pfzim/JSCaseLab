const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];

const form = document.getElementsByTagName('form')[0];

form.onsubmit = function(ev) {
    let login = '';
    let password = '';

    for(let i = 0, j = form.elements.length; i < j; i++)
    {
        if(form.elements[i].name === 'login')
        {
            login = form.elements[i].value.trim();
        }
        else if(form.elements[i].name === 'password')
        {
            password = form.elements[i].value.trim();
        }
    }

    if(!login || !password)
    {
        console.log('fields are required');
        return false;
    }

    for(let i = 0, j = registeredUsers.length; i < j; i++)
    {
        if((login === registeredUsers[i][0]) && (password === registeredUsers[i][1]))
        {
            console.log('Login successful');
            form.reset();
            return false;
        }
    }

    console.log('Incorrect login or password');

    return false;
}
