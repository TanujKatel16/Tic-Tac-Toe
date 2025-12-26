let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".rst");
let messageContainer=document.querySelector(".winner");

function winnerPops(){
    messageContainer.classList.remove("hide");
}
function disableButtons(){
    boxes.forEach(box=> {
        box.disabled=true;
    });
}

function resetAll(){
    boxes.forEach(box=>{
        box.disabled=false;
        box.innerText="";
    });
    messageContainer.classList.add("hide");

}
function winnerCheck(){
    for(let i=0;i<8;i++){
        if(boxes[arr[i][0]].innerText!="" && boxes[arr[i][1]].innerText!="" && boxes[arr[i][2]].innerText!=""){
            console.log("Winner called");
            if(boxes[arr[i][0]].innerText===boxes[arr[i][1]].innerText && boxes[arr[i][1]].innerText===boxes[arr[i][2]].innerText){
                console.log("Winner",boxes[arr[i][0]].innerText);
                disableButtons();
                winnerPops();
            }
        }

    }
}

let turnX=1;

boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log("Button was clicked");
        if(turnX==0){
           box.innerHTML="O";
           turnX=1;
        }
        else{
           box.innerHTML="X";
           turnX=0;
        }
        box.disabled=true;
        winnerCheck();

    });
});

reset.addEventListener("click",()=>{
   resetAll();
});

let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
