let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");

let player0 = true;

let winningPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame =()=>{
    player0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked ");
        if(player0){
            box.innerText = "O";
            player0 = false;
        }else{
            box.innerText = "X";
            player0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
})



const disabledBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
        
    }
}
const enabledBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner=(winner)=>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}
let checkWinner=()=>{
    for(pattern of winningPattern){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 !=="" && position2 !=="" && position3 !==""){
            if(position1 === position2 && position2 === position3){
                showWinner(position1);
            }
        }
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

