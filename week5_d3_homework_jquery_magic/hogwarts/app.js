$(() => {
    const $container = $('#container');
    console.log($container);

    const $h1 = $('<h1>');
    console.log($h1);
    $h1.text('Hogwarts')
    $container.append($h1);


});