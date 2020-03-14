// WHAT TODO LIST JS

$("todoList").sortable({
    items: "li:not('.listTitle, .addItem')",
    connectWith: "ul",
    dropOnEmpty: true,
    placeholder: "emptySpace"
});

$("input").keydown(function(e) {
    if(e.keyCode == 13) {
        var item = $(this).val();
        
        $(this).parent().parent().append("<li>" + item + "</li>");
    }
});