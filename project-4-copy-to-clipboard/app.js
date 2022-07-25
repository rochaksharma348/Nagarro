$(document).ready(function(){

    let text = '';

    $('#title').focus();
    $('.text').autosize();

    $('#copyBtn').on('click', function() {
        $('.copyText').select();
        text = $('#copyText').val();
        console.log(text);
        document.execCommand("copy");
    })

    $('#pasteBtn').on('click', function() {
        $('#pasteText').val(text);
    });

    $('#clearBtn').on('click', function() {
        $('#pasteText').val('');
    })


  });