let box = document.getElementById("box")

let leftPosition = 0;
let topPosition = 0;


window.addEventListener('keydown', function(e){
    
let boxWidth = 50;
let boxHeight =  50;

console.log(boxWidth);

    if(e.keyCode == 39){
        if(leftPosition==1000){
            leftPosition = -50;
        }
        leftPosition+=5;
        box.style.left = leftPosition+'px';
    }
    else if(e.keyCode == 37){
        if(leftPosition== -50){
            leftPosition = 1000;
        }
        leftPosition-=5;
        box.style.left = leftPosition+'px';
    }
    else if(e.keyCode == 40){
        if(topPosition == 800){
            topPosition = -50;
        }
        topPosition+=5;
        box.style.top = topPosition+'px';
    } 
    else if(e.keyCode == 38){
        if(topPosition == -50){
            topPosition = 800;
        }
        topPosition-=5;
        box.style.top = topPosition+'px';
    }else if(e.keyCode == 13){
      
        const newDiv = this.document.createElement("div");
        newDiv.classList.add("childCircle");
        var mainBox = this.document.getElementById("main");
        newDiv.style.top = topPosition+13+'px';
        newDiv.style.left = leftPosition+13+'px';
        mainBox.append(newDiv);

        boxWidth=boxWidth-10;
        boxHeight -=10;
        
        box.style.width = boxWidth+'px';
        box.style.height = boxHeight+'px'; 



    }
})