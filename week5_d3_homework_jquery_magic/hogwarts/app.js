$(() => {
    const $container = $('#container');
    console.log($container);

    const $h1 = $('<h1>');
    console.log($h1);
    $h1.text('Hogwarts')
    $container.append($h1);

    const $h2 = $('<h2>');
    console.log($h2);
    $h2.text('Marco Riesgo');
    $container.append($h2);

    const $h3 = $('<h3>');
    console.log($h3);
    $h3.text('Gryffindor');
    $container.append($h3);

    const $h4pet = $('<h4>');
    $h4pet.addClass('toad');
    console.log($h4pet);
    $h4pet.text('Phillip the Toad');
    $container.append($h4pet);

    const $h4wand = $('<h4>');
    console.log($h4wand);
    $h4wand.text('The Elder Wand');
    $container.append($h4wand);
    

});