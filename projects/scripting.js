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
                    const computerValue=["rock","paper","scissors"];
                    const arrayvalue=Math.floor(Math.random()*computerValue.length);
                    const ComputerChoose=computerValue[arrayvalue];


                    if(valueChooseByUser === ComputerChoose){
                         score.draw++;
                         result.innerHTML=`DRAW - you both choose <img  class=rock_image src="../RockPaperScissor/${valueChooseByUser}-emoji.png ">`;
                    }

                    else if((valueChooseByUser==="rock" && ComputerChoose==="scissors") ||
                      (valueChooseByUser === "scissors" && ComputerChoose==="paper")||
                      (valueChooseByUser==="paper" && ComputerChoose==="rock") ){
                        score.win++;
                        result.innerHTML=`YOU WIN - computer choose <img  class=rock_image src="../RockPaperScissor/${ComputerChoose}-emoji.png "> and you choose <img  class=rock_image src="../RockPaperScissor/${valueChooseByUser}-emoji.png ">`;
                    }
                     else{
                        score.lose++;
                        result.innerHTML=`YOU LOSE -computer choose <img  class=rock_image src="../RockPaperScissor/${ComputerChoose}-emoji.png "> and you choose <img  class=rock_image src="../RockPaperScissor/${valueChooseByUser}-emoji.png ">`;
                     }
                     
                     scoredisplay.innerText=`score is win ${score.win} lose ${score.lose}  draw${score.draw}`;
                     localStorage.setItem("score",JSON.stringify(score));
                    }
                )
            })

        
  