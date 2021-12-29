const buttons = document.getElementsByTagName('button');

for(let i = 0, j = buttons.length; i < j; i++)
{
    if(buttons[i].getAttribute('data-clicked') !== null)
    {
        //buttons[i].addEventListener('click', click_register);
        buttons[i].onclick = click_register;
    }
}

function click_register(ev)
{
    const target = ev.target || ev.srcElement;
    
    if(target)
    {
        let counter = target.getAttribute('data-clicked');
        target.setAttribute('data-clicked', ++counter);
    }
}
