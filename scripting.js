const valueChooseByUser=" ";
            const buttons=document.querySelectorAll("button");//[Rock,Paper,Siscor]
            buttons.forEach(button=>{
                button.addEventListener("click",function()
                    {
                        const valueChooseByUser=this.value;
  
                    const computerValue=["rock","paper","scissor"];
                    const arrayvalue=Math.floor(Math.random()*computerValue.length);
                    const ComputerChoose=computerValue[arrayvalue];
                    if(valueChooseByUser === ComputerChoose){
                        alert(`computer choose ${ComputerChoose} and it is a Draw`);
                    }else if(
                      (valueChooseByUser==="rock" && ComputerChoose==="scissor") ||
                      (valueChooseByUser === "scissor" && ComputerChoose==="paper")||
                      (valueChooseByUser==="paper" && ComputerChoose==="rock") ){
                             alert(`computer choose ${ComputerChoose} and it is a won`)
                    }
                     else{
                         alert(`computer choose ${ComputerChoose} and it is a  lost`);
                    }
                   }
                )
            })