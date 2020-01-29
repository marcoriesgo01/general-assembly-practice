console.log("JS is linked")
$(() => {

    //Create a task list with of unordered list items with an id of 'taskList'
    const $taskList = $('<ul>').attr('id', 'taskList');
    
    //Append the taskList to the to-do-list section in the HTML
    $('#to-do-list').append($taskList);
    
    //Create the submit function with the user text input:
    $userSubmit = $('#submit').on('click', () => {
    //Take the value from the user text field and make it a variable of inputBoxText  
        $inputBoxText = $('#input-box').val();
    //Create an li with the class of toDo
        const $listOfTasks = $('<li>').addClass('toDo');
    //Append the input in the text field to the list of tasks you just created
        $listOfTasks.append($inputBoxText);
    //Append the above list of tasks to the taskList created in the beginning
        $taskList.append($listOfTasks);
    });

    //Create another ul list like before - this time for the completed tasks
    const $doneList = $('<ul>').attr('id', 'doneList');
    
    //Append the doneList to the completed section of the HTML
    $('#completed').append($doneList);

    //Create the tasksCompleted list using the elements from the toDo list
    $tasksCompleted = $('#to-do-list').on('click', (event) => {
    //Transfer the task from the completed list once user has clicked it:
        $transferTask = $(event.target);
    //Append the task to transfer into the doneList creted before
        $('#doneList').append($transferTask);
    //Prevent default handling
        event.preventDefault();
    });

})