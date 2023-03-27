/*var players = Array.prototype.slice.call(document.getElementById('input[name=player-choice]'));
players.forEach(function(choice){
  choice.addEventListener('click', setPlayer, false);
});*/

const draggbles = document.querySelectorAll(".shallow-draggable")
const containers = document.querySelectorAll(".draggable_container")

draggbles.forEach((draggble) => {
  //for start dragging costing opacity
  draggble.addEventListener("dragstart", () => {
    draggble.classList.add("dragging")
  })

  //for end the dragging opacity costing
  draggble.addEventListener("dragend", () => {
    draggble.classList.remove("dragging")
  })
})
//something
containers.forEach((container) => {
  container.addEventListener("dragover", function (e) {
    e.preventDefault()
    const afterElement = dragAfterElement(container, e.clientY)
    const dragging = document.querySelector(".dragging")
    if (afterElement == null) {
      container.appendChild(dragging)
    } else {
      container.insertBefore(dragging, afterElement)
    }
  })
})

function dragAfterElement(container, y) {
  const draggbleElements = [...container.querySelectorAll(".shallow-draggable:not(.dragging)")]

  return draggbleElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element
}

function myFunction(){
  let x = document.getElementById()

}

const draggbless = document.querySelectorAll(".shallow-draggable")
const containerss = document.querySelectorAll(".draggable_container")

draggbless.forEach((draggble) => {
  //for start dragging costing opacity
  draggble.addEventListener("dragstart", () => {
    draggble.classList.add("dragging")
  })

  //for end the dragging opacity costing
  draggble.addEventListener("dragend", () => {
    draggble.classList.remove("dragging")
  })
})
//something
containerss.forEach((container) => {
  container.addEventListener("dragover", function (e) {
    e.preventDefault()
    const afterElement = dragAfterElement(container, e.clientY)
    const dragging = document.querySelector(".dragging")
    if (afterElement == null) {
      container.appendChild(dragging)
    } else {
      container.insertBefore(dragging, afterElement)
    }
  })
})

function dragAfterElement(container, y) {
  const draggbleElements = [...container.querySelectorAll(".shallow-draggable:not(.dragging)")]

  return draggbleElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element
}

let playerText = document.getElementById(Container)
let restartBtn = document.getElementById(start) 
let boxes = Array.from(document.getElementsByClassName('grid-item'))
console.log(grid-item)

const O_TEXT = "0"
const H_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

const startGame = () => {
  boxes.forEach(boxes => boxes.addEventListener('click', boxClicked))
}

function boxClicked(e) {
  const id = e.target.id

  if(!spaces[id]){
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer

    currentPlayer = currentPlayer == H_TEXT ? O_TEXT : H_TEXT
  }
}

startGame()
/*function myFunction(){
  let x = document.getElementById()
  x.style.fontSize= "2px";
}*/

/*const multiDimensionalArray = [
  [0,2,1,0,0],
  [2,0,0,3,0],
  [1,0,0,4,6],
  [0,3,4,0,5],
  [0,0,6,5,0]
];

multiDimensionalArray.sort((a,b)=>{
  return a[2]-b[2];
})

console.log(multiDimensionalArray);*/