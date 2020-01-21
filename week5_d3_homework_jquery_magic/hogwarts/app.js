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

    const $pet = $('<h4>');
    $pet.addClass('toad');
    console.log($pet);
    $pet.text('Phillip the Toad');
    $container.append($pet);

    const $wand = $('<h4>');
    console.log($wand);
    $wand.text('The Elder Wand');
    $container.append($wand);
    
    const $ul = $('<ul>');
    console.log($ul);
    $ul.attr('storage', 'trunk');
    $container.append($ul);

    const $beer = $('<li>');
    $beer.text("Butter beer");
    $ul.append($beer);
    
    const $cloak = $('<li>');
    $cloak.addClass('secret');
    $cloak.text("Invisibility cloak");
    $ul.append($cloak);

    const $magicMap = $('<li>');
    $magicMap.addClass('secret');
    $magicMap.text("Magic map");
    $ul.append($magicMap);

    const $timeTurner = $('<li>');
    $timeTurner.addClass('secret');
    $timeTurner.text("Time turner");
    $ul.append($timeTurner);

    const $leash = $('<li>');
    $leash.addClass('toad');
    $leash.text("Leash");
    $ul.append($leash);

    const $jellyBeans = $('<li>');
    $jellyBeans.text("Bertie Bott's Every Flavor [Jelly] Beans");
    $ul.append($jellyBeans);

});