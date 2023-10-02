let a = ''; // первое число
let b = ''; // второе число
let sing = ''; // знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/'];

// Экран
const out = document.querySelector('.calc-screen p');

function clearALL() {
    a = ''; // первое число и результат
    b = ''; // второе число
    sing = ''; // знак
    finish = false;
    out.textContent = '0';
}

document.querySelector('.ac').onclick = clearALL;

document.querySelector('.buttons').onclick = (event) => {
    // нажата не кнопка
    if (!event.target.classList.contains('btn')) return;
    
    // нажата кнопка clearALL
    if (event.target.classList.contains('ac')) {
        clearALL();
        return;
    }

    out.textContent = '';
    // получаю нажатую кнопку
    const key = event.target.textContent;

    // если нажата клавиша 0-9 или .
    if (digit.includes(key)) {
        if (sing === '' || finish) {
            a += key;
            out.textContent = a;
            finish = false;
        } else {
            b += key;
            out.textContent = b;
        }
        return;
    }

    // если нажата клавиша + - * /
    if (action.includes(key)) {
        sing = key;
        out.textContent = sing;
        return;
    }

    // нажата =
    if (key === '=') {
        if (b === '') b = a;
        switch (sing) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = (+a) - (+b);
                break;
            case "x": // Исправлено "X" на "x"
                a = (+a) * (+b);
                break;
            case "/":
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a = '';
                    b = '';
                    sing = '';
                    return;
                }
                a = (+a) / (+b);
                break;
        }
        finish = true;
        out.textContent = a;
    }
};