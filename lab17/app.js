document.querySelector('#btn').addEventListener(
    'click',
    function(ev) {
        const title = document.querySelector('div h1');
        console.log('title: ', title);

        const btn = document.querySelector('#btn');
        console.log('btn : ', btn);

        const subtitile = document.querySelector('section:nth-of-type(2) h2');
        console.log('subtitile : ', subtitile);

        const sections = document.querySelectorAll('section');
        console.log('sections : ', sections);
    }
);
