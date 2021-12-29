document.getElementById('myBtn').addEventListener('click', spoiler_show_hide);

function spoiler_show_hide(ev)
{
    const target = ev.target || ev.srcElement;
    
    if(target)
    {
        let spoiler = target.nextElementSibling;
        
        spoiler.classList.toggle('closed');
        
        if(!spoiler.className.includes('closed'))
        {
            document.addEventListener('keyup', on_key_up);
        }
        else
        {
            document.removeEventListener('keyup', on_key_up);
        }
    }
}

function on_key_up(ev)
{
    if(ev.keyCode == 27)
    {
        document.getElementById('spoiler').classList.add('closed');
        document.removeEventListener('keyup', on_key_up);
    }
}