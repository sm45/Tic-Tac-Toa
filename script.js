let boxes=document.querySelectorAll(".box");

let resetbtn=document.querySelector("#resetbtn");
resetbtn.remo

let turno=true;

const winpattern=[
    [0, 1, 2],
    [3, 4, 5],  
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        if(turno)
        {
            box.innerText="o";
            turno=false;
        }
        else
        {
            box.innerText="x";
            turno=true;
        }
        box.disabled=true;
        checkwin();
    })
})
checkwin=()=>{
    for(let pattern of winpattern)
    {
        console.log(pattern[0],pattern[1],pattern[2]);
    }
}
