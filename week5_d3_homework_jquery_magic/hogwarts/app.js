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

    const $tableTitle = $('<h5>');
    $tableTitle.text("Spring 2020");
    $container.append($tableTitle);

    const $classes = $('<table>');
    $container.append($classes);

    const $thead = $('<thead>');
    $classes.append($thead);

    const $day = $('<th>');
    $day.text("Day");
    $thead.append($day);
    
    const $class = $('<th>');
    $class.text("Classes");
    $thead.append($class);

    const $tr = $('<tr>');
    $classes.append($tr);

    const $monday = $('<td>');
    $monday.text("Monday");
    $tr.append($monday);

    const $mondayClass = $('<td>');
    $mondayClass.text("Potions, Quidditch practice, Herbology");
    $tr.append($mondayClass);

    const $tr2 = $('<tr>');
    $classes.append($tr2);

    const $tuesday = $('<td>');
    $tuesday.text("Tuesday");
    $tr2.append($tuesday);

    const $tuesdayClass = $('<td>');
    $tuesdayClass.text("History of Magic, Defense Against the Dark Arts, Charms");
    $tr2.append($tuesdayClass);

    const $tr3 = $('<tr>');
    $classes.append($tr3);

    const $wednesday = $('<td>');
    $wednesday.text("Wednesday");
    $tr3.append($wednesday);

    const $wednesdayClass = $('<td>');
    $wednesdayClass.text("Divination, Transfiguration, Quidditch practice");
    $tr3.append($wednesdayClass);

    const $tr4 = $('<tr>');
    $classes.append($tr4);

    const $thursday = $('<td>');
    $thursday.text("Thursday");
    $tr4.append($thursday);

    const $thursdayClass = $('<td>');
    $thursdayClass.text("Charms, Potions, History of Magic");
    $tr4.append($thursdayClass);

    const $tr5 = $('<tr>');
    $classes.append($tr5);

    const $friday = $('<td>');
    $friday.text("Friday");
    $tr5.append($friday);

    const $fridayClass = $('<td>');
    $fridayClass.text("Defence Against the Dark Arts, Herbology, Divination");
    $tr5.append($fridayClass);






});