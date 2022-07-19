let inputText = '';
let input = $('.input');

$('document').ready(function() {
    $('.value').on('click', function() {
        let val = $(this).text();
        if (val != '.' || !containsDot()) {
            inputText += $(this).text();
            console.log(inputText);
            input.text(inputText);
        }
    })

    function containsDot() {
        for (let i = inputText.length - 1; i >= 0; --i) {
            let ch = inputText[i];
            if(ch === '+' || ch === '-' || ch === '*' || ch === '/' || ch == '%') break;
            if (ch === '.') return true;
        }
        return false;
    }

    $('.fa-solid').on('click', function() {
        if (!lastIsOperator()) {
            if ($(this).hasClass('fa-plus')) {
                inputText += '+';
            } else if ($(this).hasClass('fa-minus')) {
                inputText += '-';
    
            } else if ($(this).hasClass('fa-divide')) {
                inputText += '/';
    
            } else if($(this).hasClass('fa-xmark')) {
                inputText += '*';
            } else if($(this).hasClass('fa-percent')) {
                inputText += '%';
            }
            console.log(inputText);
            // input.text(inputText);
        } 

        if($(this).hasClass('fa-delete-left')) {
            if (inputText.length >= 1) {
                inputText = inputText.slice(0, inputText.length - 1);
                console.log(inputText);
            }
        }

        if($(this).hasClass('fa-equals')) {
            inputText = eval(inputText);
        }

        input.text(inputText);
    });

    $('#clear').on('click', function() {
        inputText = "";
        input.text("");
    })

    function lastIsOperator() {
        let ch = inputText[inputText.length-1];
        return (inputText === "" || ch === '+' || ch === '-' || ch === '%' || ch === '*' || ch === '/' || (inputText.length == 1 && ch == '.'));
    }
});