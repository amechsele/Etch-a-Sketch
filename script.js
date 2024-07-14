let container = document.getElementById("container");
let select = document.getElementById("select");
let reset = document.getElementById("reset");

createGrid(16);

select.addEventListener('click', () => {
    resetGrid();
    let num = parseInt(prompt("enter a number between 1 and 100 included"));
    while(isNaN(num) || num > 100 || num < 0){
        alert("Input error");
        num = parseInt(prompt("Enter a number between 1 and 100 included"));
    }
       createGrid(num);});

// create the grid of specified size
function createGrid(size){
    for(let i=0; i < size; i++){
        let row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        for(let j=0; j < size; j++){
            let cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.addEventListener('mouseover', (e) => e.target.style.backgroundColor = randomColor());
            row.appendChild(cell);
    }
}
}

// create and return a random color
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = "rgb(" + r + "," + g + "," + b + ")";
    return color;
}

function resetGrid(){
    container.innerHTML = '';
}

reset.addEventListener('click', () => resetGrid());