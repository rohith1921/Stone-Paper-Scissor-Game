let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rand = Math.floor(Math.random() *3);
    return options[rand];
};

const drawGame = () => {
    msg.innerText = "Draw, Play again";
    msg.style.backgroundColor = "grey";
};

const showWinner = (userWin, userchoice, compChoice) => {
    if(userWin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${compChoice} beats Your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    const compChoice = genCompChoice();

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userchoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);

    });
});