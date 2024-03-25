let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");

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
// console.log("hehehehe");
// for(pattern of winningPattern){
//     console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
// }

