// JAVASCRIPT DESIGN PATTERN  is very  important as a developer e.g Modeule design patter i.e adding everythin inside of our own object
// ===============================================

// numSquare stand for d no of squares on eida easy(3) or hard(6) mode
var numSquare = 6; 
var colors = [];
var picked; 
var squares = document.querySelectorAll(".square");
var h1span = document.getElementById("ola1"); 
var msgDisplay = document.querySelector("#message");
// to also chng d color of h1
var h1 = document.querySelector("h1"); 
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode"); 

init(); 

function init(){
    setUpdModeButton(); 
    setUpSquares();
    reset(); 
}

function setUpdModeButton(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[1].classList.remove("selected"); 
            modeButtons[0].classList.remove("selected");
            this.classList.add("selected")
            // ================================================
            // if(this.textContent === "Easy"){
            //     numSquare = 3;
            // }else{
            //     numSquare = 6; 
            // }
             // ================================================
            // or=================== ternary operator method................ SHORTER----
            this.textContent === "Easy" ? numSquare = 3: numSquare = 6; 
            reset();
        });
    }
}

function setUpSquares(){
    for(i = 0; i < squares.length; i++){
        // add click listerners to squares
        squares[i].addEventListener("click", function(){
            // grab color of cliked square
           var clikedColors = this.style.backgroundColor; 
            // cmpare color to picked
            if(clikedColors === picked){
                msgDisplay.textContent = "Correct!!"; 
                // to enable only d picked color to spred on all oda squares
                changeColor(clikedColors); 
                h1.style.backgroundColor = clikedColors; 
                resetButton.textContent = "Play Again!!!"
            }else{
                this.style.backgroundColor = "#232323"; 
                msgDisplay.textContent = "Try again!!!"; 
            }
        });
    }
}

// 1. factor bot easy adn hard button togeda as (modebuttons)
function reset(){
    colors = generateRandomColors(numSquare); 
    // pick a new color
    picked = pickColor(); 
    // chng colorDispaly (h1span) to match new picked color
    h1span.textContent = picked; 
    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        squares[i].style.display = "block"; 
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none"; 
        }
      
    }    
 h1.style.backgroundColor = "steelblue";  
 msgDisplay.textContent = " "; 
//  resetButton.textContent = "New Colors"; 
//  or
resetButton.textContent = "New Colors"; 
}


// for d reset button afta d color function (rgb string down down)=================
resetButton.addEventListener("click", function(){
     // RESET / add initial colors to back squares
    // generat all new colors
   reset();
});

// for colors of d squares to chnge to picked color
function changeColor(color){
    // loop tru all squres
    for(var i = 0; i < squares.length; i++){
         // change each colo to match given color
         squares[i].style.backgroundColor = color; 
    }
   
} 

// TO VARY D COLORS 
// var pickcolor is defined up and wil b use hre insid d function
function pickColor(){
    // to pick random color, we math.random========== and to remov decima, we add math.floor
    // dis wil giv random no btw 0 and d length of d colors
    // e.g Math.floor(Math.random() * 7 + 1): wil pik nos from 1 to 7 without points (cos of math.floor)
   var random =  Math.floor(Math.random() * colors.length); 
   return colors[random]; 
//    after whcih d colors now randomise adn changes if refresh & cliked!!!!!!!!! wow!!!!!!!!!!
}

// make anoda function to pick random color
function generateRandomColors(num){
    // make an array
    var arr = []
    // repeat num array
    for(var i = 0; i < num; i++){
        // get random color and push into array
        arr.push(randomColor()); 
    }
    // return dat array
    return arr; 
}

// make anoda function
function randomColor(){
    // pick a "red" frm 0 to 255
    var r = Math.floor(Math.random() * 256) 

    // pick a "green" frm 0 to 255
    var g = Math.floor(Math.random() * 256) 
    // pick a blue frm 0 to 255
    var b = Math.floor(Math.random() * 256) 
    // now to generate d colors combine i.e: "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")"; 
    // ======DEBUGGING================
    // spaces were added afta d comas to fix d prblm : ofcos nid to tink bynd d box===================================
    // WORKEDDDDDDDDDDDDDDDDDD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    
}