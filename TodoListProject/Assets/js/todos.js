// Check off specific li by clicking
// If the item is black, turn grey/ strikethrough; else, remove
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

// click on X to delete To-do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Create event to make new To-Do
$("input[type='text']").keypress(function(event){
    if(event.which === 13){
    //  take input from typing
        var toDoText =$(this).val();
        $(this).val("");
        // create new ul and add li
        $("ul").append("<li><span><i class='far fa-trash-alt'> </i> </span> " + toDoText + "</li>");
    }
});

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});