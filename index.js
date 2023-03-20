/*Drag and Drop*/
const dragitems = document.getElementById('drag_items')

new sortable(dragitems,{
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});