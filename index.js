/*Drag and Drop*/
const dropItems = document.getElementById('drag_items')

new sortable(dropItems,{
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});