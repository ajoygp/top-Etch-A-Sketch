let container=document.querySelector(".container");

function createGrids(len=16){
    for(let i=0;i<len;i++){
        let grid = document.createElement("div");
        grid.className="grid";
        container.appendChild(grid);
    }
}

createGrids()