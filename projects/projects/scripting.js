let score=JSON.parse(localStorage.getItem("score")) || {win:0,lose:0,draw:0};
            const buttons=document.querySelectorAll("button");//[Rock,Paper,Siscor///reset]
            buttons.forEach(button=>{
                button.addEventListener("click",function()
                    {
                        if(this.value === "reset"){
                            score.win=0;
                            score.lose=0;
                            score.draw=0;
                            localStorage.setItem("score",JSON.stringify(score));
                            return 0;
                        }

                        const valueChooseByUser=this.value;
  
                    const computerValue=["rock","paper","scissor"];
                    const arrayvalue=Math.floor(Math.random()*computerValue.length);
                    const ComputerChoose=computerValue[arrayvalue];
                    if(valueChooseByUser === ComputerChoose){
                        score.draw++;
                         localStorage.setItem("score",JSON.stringify(score));
                        alert(`computer choose ${ComputerChoose} and it is a Draw
 score is win ${score.win} lose ${score.lose}  draw${score.draw}`);
                    }else if(
                      (valueChooseByUser==="rock" && ComputerChoose==="scissor") ||
                      (valueChooseByUser === "scissor" && ComputerChoose==="paper")||
                      (valueChooseByUser==="paper" && ComputerChoose==="rock") ){
                        score.win++;
                         localStorage.setItem("score",JSON.stringify(score));
                             alert(`computer choose ${ComputerChoose} and it is a won 
 score is win ${score.win} lose ${score.lose}  draw${score.draw}`)
                    }
                     else{
                        score.lose++;
                         localStorage.setItem("score",JSON.stringify(score));
                         alert(`computer choose ${ComputerChoose} and it is a  lost
score is win ${score.win} lose ${score.lose}  draw${score.draw}`);
                    }
                   }
                )
            })