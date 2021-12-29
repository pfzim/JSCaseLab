// опишите класс Collapser
class Collapser {
    constructor(class_name)
    {
        const buttons = document.getElementsByClassName(class_name);

        for(let i = 0, j = buttons.length; i < j; i++)
        {
            buttons[i].addEventListener('click', Collapser.spoiler_show_hide);
        }
    }

    static spoiler_show_hide(ev)
    {
        const target = ev.target || ev.srcElement;
        const el = target.nextElementSibling
        
        if(el)
        {
            if(el.style.display === 'block')
            {
                el.style.display = 'none';
            }
            else
            {
                el.style.display = 'block';
            }
        }
    }
}
