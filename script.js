let container=document.querySelector(".container");
let sizebutton=document.querySelector(".size-button");

let minGrid=1;
let maxGrid=100;

function randomColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
    let s =window.prompt(`Enter grid size (min ${minGrid}, max ${maxGrid})`)
    if(!Number(s)){
        window.alert("Enter a valid number");
        s =window.prompt(`Enter grid size (min 50, max 100)`)
    }  
    if(s){
        container.innerHTML="";
        createGrids(s);
    }
}
sizebutton.addEventListener("click",getsize);