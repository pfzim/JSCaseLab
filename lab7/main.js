function censor()
{
    const dictionary = [];

    return function (key, value) {
        if(typeof value === 'undefined')
        {
            for(let row of dictionary)
            {
                key = key.replaceAll(row.key, row.value);
            }
            return key;
        }
        else
        {
            dictionary.push( {key: key, value: value} );
        }

        return null;
    }
}

const changeScene = censor();

changeScene('PHP', 'JS');

changeScene('backend', 'frontend');

console.log(changeScene('PHP is the most popular programming language for backend web-development'));
