let cStage = document.getElementById("colorStage")
let cButton = document.getElementById("colorButton")

const qImage = document.createElement("popeImage")
const qButton = document.createElement("imageToggle")

let changeColor = function() 
{
    let rComp = Math.random() * 255
    let gComp = Math.random() * 255
    let bComp = Math.random() * 255   


    cStage.style.backgroundColor = "rgb(" + rComp + "," + gComp +"," + bComp +")"
}

let toggleImage = () =>
{
    console.log(qImage.src)
    if(qImage.src.includes("pope1"))
    { qImage.src = "images/pope2.webp" 
    }
    else 
    { qImage.src = "images/pope1.webp" 
    }
}

qButton.addEventListener("click", toggleImage)
cButton.addEventListener("click", changeColor)
window.addEventListener("load", changeColor)