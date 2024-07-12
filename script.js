let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let  turnO = true;
let count = 0;
let winpattern = [[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
     
     if(turnO){
        box.innerHTML= "O";
        console.log(box);
        turnO = false;
     } else{
        box.innerHTML = "X";
        console.log(box);
        turnO = true
     }
     box.disable = "true";
     count++;
     checkwinner();
    });
});
const showwinner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}    
const checkwinner = () => {
      for(let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos1val && pos2val === pos3val){
                showwinner(pos1val);
                return true;
            }
        }
      }

}