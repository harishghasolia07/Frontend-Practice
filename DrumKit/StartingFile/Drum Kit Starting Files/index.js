var numberofbtn=document.querySelectorAll(".drum").length;
for(i=0;i<numberofbtn;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",onclick);
   
}
function onclick(){

    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);

    buttonanimation(buttonInnerHTML);

}   

document.addEventListener("keypress", function(event) {
    makesound(event.key);
    buttonanimation(event.key);
});


function makesound(key){


    if(key=="f"){
        let mySound = new Audio("./sounds/crash.mp3");
        mySound.play()
     }
     else if(key=="a"){
         let mySound = new Audio("./sounds/kick-bass.mp3");
        mySound.play()
     }
     else if(key=="s"){
         let mySound = new Audio("./sounds/snare.mp3");
        mySound.play()
     }
     else if(key=="d"){
         let mySound = new Audio("./sounds/tom-1.mp3");
        mySound.play()
     }
     else if(key=="j"){
         let mySound = new Audio("./sounds/tom-2.mp3");
        mySound.play()
     }
     else if(key=="k"){
         let mySound = new Audio("./sounds/tom-3.mp3");
        mySound.play()
     }
     else if(key=="l"){
         let mySound = new Audio("./sounds/tom-4.mp3");
        mySound.play()
     }
}

function buttonanimation(currentkey){
   var activebutton = document.querySelector("."+currentkey);

   activebutton.classList.add("pressed");

   setTimeout(function(){
    activebutton.classList.remove("pressed");
   },100);
}
