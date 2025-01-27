let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".option");
const msg= document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissors"];
const randomIdx=  Math.floor( Math.random() * 3);
return options[randomIdx];
};

const drawGame = () => {
msg.innerText = "game was a draw. play again";
msg.style.backgroundColor = "#081b31";

};

const showWinner = (userwin , userchoice, compchoice) => {
 if(userwin){
  userscore++;
  userscorepara.innerText = userscore; 
  msg.innerText = `You won! your ${userchoice} beats ${compchoice}`;
  msg.style.backgroundColor = "green";
 }
 else{
  compscore++;
  compscorepara.innerText = compscore;
  msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
  msg.style.backgroundColor = "red";

 }
};

const gameplay = (userchoice) => {
console.log("user choice is ",userchoice); 
//gen com choice
const compchoice = gencompchoice();
console.log("comp choice is ",compchoice);
if(userchoice === compchoice){
  drawGame();
}
else{
  let userwin = true;
  if(userchoice==="rock" && compchoice==="paper"){
userwin = false;
  }
 else if(userchoice==="paper" && compchoice==="scissors"){
userwin = false;
  }
  else if(userchoice==="scissors" && compchoice==="rock"){
userwin = false;
  }
  showWinner(userwin,userchoice,compchoice);
}
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
gameplay( userchoice);
  });
});