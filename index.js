/*Drag and Drop*/
const dropItems = document.getElementById('drop_items')

new sortable(dropItems,{
    animation: 350,
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag"
});