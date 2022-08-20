let container=document.querySelector(".container");
let sizebutton=document.querySelector(".size-button");
let resetbutton=document.querySelector(".reset-button");


let minGrid=1;
let maxGrid=100;
let newGridSize=10;

function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

resetbutton.addEventListener("click",()=>{
    container.innerHTML="";
    createGrids(newGridSize);
})


function createGrids(len=10){   
    len = len>maxGrid? maxGrid:len;
    len = len<minGrid? minGrid:len; 
     
    for(let row=0;row<len;row++){
        let gridRow = document.createElement("div");
        gridRow.className="gridRow";
        for(let i=0;i<len;i++){
            let grid = document.createElement("div");
            grid.className="grid";
            grid.addEventListener("mouseover",()=>{
                grid.style.backgroundColor=randomColor();
            })
            gridRow.appendChild(grid);
        }
        container.appendChild(gridRow);
    }
}

createGrids();

function getsize(){
    newGridSize =window.prompt(`Enter grid size (min ${minGrid}, max ${maxGrid})`)
    if(newGridSize && !Number(newGridSize)){
        window.alert("Enter a valid number");
        newGridSize =window.prompt(`Enter grid size (min ${minGrid}, max ${maxGrid})`)
    }  
    if(newGridSize){
        container.innerHTML="";
        createGrids(newGridSize);
    }
}
sizebutton.addEventListener("click",getsize);