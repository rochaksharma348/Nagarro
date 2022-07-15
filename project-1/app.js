let flag = false;

$(document).ready(function() {

    $('#box').toggle(false);
    $('.clicks').click(() => {
        $('#box').toggle(0, 'swing', () => {
            if (!$('#box').hasClass('show')) {
                $('#box').addClass('show');
                flag = true;
                $('#box').toggle(true);
            } else {
                $('#box').removeClass('show');
                flag = false;
                $('#box').toggle(false);
            }
        });
    })

    $('.submission').on('click', () => {
        $('#box').removeClass('show');
        $('#box').toggle(false);
    })

    $('.cancel').on('click', () => {
        $('#box').removeClass('show');
        $('#box').toggle(false);
    })
});