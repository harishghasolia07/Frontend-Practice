for(var i=0;i<5;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color="red";
    })
}

$(document).keypress(function(event){
    $("h1").text(event.key)
});


