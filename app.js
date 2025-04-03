let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("#msg-container");
let msg = document.querySelector("#msg");

let turn0=true;
let count = 0;
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
const resetGame=()=>{
    turn0 = true;
    count=0; // iski kya jrurat thi
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        
        box.disabled = true;
        count++;
        //checkWinner();
        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});
const gameDraw=()=>{
    msg.innerText=`Game is a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
    console.log("All boxes are disabled!"); // ✅ Debugging
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};
const showWinner=(winner)=>{
msg.innerText=`Congratulation!, winner is ${winner}`;
msgContainer.classList.remove("hide"); // ise dekhna hai kya sodda hai yo
disableBoxes();
};
const checkWinner=()=>{
    for (let pattern of winPattern){
        let post1Val=boxes[pattern[0]].innerText;  // isne v dekhiye yo kse chal ra hai 
        let post2Val=boxes[pattern[1]].innerText;
        let post3Val=boxes[pattern[2]].innerText;
        if(post1Val!="" && post2Val!="" && post3Val!=""){
            if(post1Val===post2Val && post2Val===post3Val){
                showWinner(post1Val);
                return true;
            }
        }
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);