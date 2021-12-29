const buttons = document.getElementsByClassName('accordion');

for(let i = 0, j = buttons.length; i < j; i++)
{
    //buttons[i].addEventListener('click', spoiler_show_hide);
    buttons[i].onclick = spoiler_show_hide;
}

function spoiler_show_hide(ev)
{
    const target = ev.target || ev.srcElement;
    
    if(target)
    {
        target.nextElementSibling.classList.toggle('show');
    }
}
