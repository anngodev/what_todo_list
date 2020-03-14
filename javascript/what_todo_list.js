// WHAT TODO LIST JS

$("todoList").sortable({
    items: "li:not('.listTitle, .addItem')",
    connectWith: "ul",
    dropOnEmpty: true,
    placeholder: "emptySpace"
});

$("input").keydown(function() {
    
});