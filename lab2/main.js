var riddle = {
    question: 'Висит груша нельзя скушать',
    correctAnswer: 'лампочка',
    hints: ['это не съедобное', 'это не фрукт'],
    tries: 5,
    checkAnswer(str) {
        if(this.tries <= 0)
        {
            console.log('Игра окончена');
            alert('Игра окончена');
            return;
        }

        if(str.trim().toLowerCase().includes(this.correctAnswer))
        {
            console.log('Правильный ответ');
            alert('Правильный ответ');
            this.tries = 0;
        }
        else
        {
            console.log('Неправильный ответ');
            alert('Неправильный ответ');
            this.tries--;
        }

        if(this.tries > 0)
        {
            document.getElementById('tries').innerText = 'Осталось попыток: ' + this.tries;
            
            if(this.tries <= this.hints.length)
            {
                alert('Подсказка: ' + this.hints[this.hints.length - this.tries]);
            }
        }
        else
        {
            document.getElementById('tries').innerText = 'Игра окончена. Правильный ответ: ' + this.correctAnswer;
        }
    }
}

window.onload = function() {
    document.getElementById('riddle').innerText = riddle.question;
}

function check() {
    var input = document.getElementById('answer');

    var guessedAnswer = input.value;

    if(guessedAnswer)
    {
        riddle.checkAnswer(guessedAnswer);
    }
}
