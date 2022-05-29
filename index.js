$('#subscribe').on('click', function() {
    let button = $(this);
    let buttonicon = button.find('.icon');
    let spinner = button.find('.spinner');

    button.addClass('button-style-disabled');
    buttonicon.addClass('none');
    spinner.removeClass('opacity0');
    spinner.addClass('infinite-rotate');
    button.find('.label').text('subscribing..');

    setTimeout(function() {
        location.reload();
    }, 4000);
});