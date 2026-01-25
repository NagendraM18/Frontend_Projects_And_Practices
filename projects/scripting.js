let score=JSON.parse(localStorage.getItem("score")) || {win:0,lose:0,draw:0};

            const buttons=document.querySelectorAll("button");//[Rock,Paper,Siscor///reset]
            const result=document.querySelector(".Js_winning");
            const scoredisplay=document.querySelector(".Js_score");
            buttons.forEach(button=>{
                button.addEventListener("click",function()
                    {
                        if(this.value === "reset"){
                            score.win=0;
                            score.lose=0;
                            score.draw=0;
                            localStorage.setItem("score",JSON.stringify(score));
                            result.innerHTML=" You clicked on RESET BUTTON";
                            scoredisplay.innerText=`score is win ${score.win} lose ${score.lose} draw ${score.draw}`;
                            return 0;
                        }

                    const valueChooseByUser=this.value;
                    const computerValue=["rock","paper","scissor"];
                    const arrayvalue=Math.floor(Math.random()*computerValue.length);
                    const ComputerChoose=computerValue[arrayvalue];


                    if(valueChooseByUser === ComputerChoose){
                         score.draw++;
                         result.innerText=`DRAW - you both choose ${valueChooseByUser}`;
                    }
                         
                    else if((valueChooseByUser==="rock" && ComputerChoose==="scissor") ||
                      (valueChooseByUser === "scissor" && ComputerChoose==="paper")||
                      (valueChooseByUser==="paper" && ComputerChoose==="rock") ){
                        score.win++;
                        result.innerText=`YOU WIN - computer choose ${ComputerChoose} and you choose ${valueChooseByUser}`;
                    }
                     else{
                        score.lose++;
                        result.innerText=`YOU LOSE -computer choose ${ComputerChoose} and you choose ${valueChooseByUser}`;
                     }
                     
                     scoredisplay.innerText=`score is win ${score.win} lose ${score.lose}  draw${score.draw}`;
                     localStorage.setItem("score",JSON.stringify(score));
                    }
                )
            })

            //computer choose ${ComputerChoose} and it is a
  