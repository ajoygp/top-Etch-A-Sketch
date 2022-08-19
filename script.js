let container=document.querySelector(".container");

function createGrids(len=16){        
    for(let row=0;row<len;row++){
        let gridRow = document.createElement("div");
        gridRow.className="gridRow";
        for(let i=0;i<len;i++){
            let grid = document.createElement("div");
            grid.className="grid";
            gridRow.appendChild(grid);
        }
        container.appendChild(gridRow);
    }
}

createGrids()