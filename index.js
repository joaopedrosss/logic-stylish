
var button = document.querySelector("button")
button.onclick = revealParags;

var darkButton = document.getElementById("darkButton");
darkButton.onclick = turnDark;

function revealParags(){
    var parags = document.querySelectorAll("p");
    if(parags[0].class=="reveal"){
        for(var i =0;i<parags.length; i++){
            parags[i].style=""
        }

        parags[0].class="";
        document.querySelector("button").innerHTML = "Reveal the paragraphs";
    } else{
        for(var i =0;i<parags.length; i++){
            parags[i].style="border:solid white 1px"
        }

        parags[0].class="reveal";
        document.querySelector("button").innerHTML = "Hide the paragraphs";
    }
}

function turnDark(){ 
    var body = document.querySelector("body");
    if(body.class == "light"){
        body.style= "background: #ffffff";
        body.class = "dark";
        document.getElementById("darkButton").innerHTML = "Turn on Dark Mode";
    } else{
        body.style = "background: #000000";
        body.class = "light";
        document.getElementById("darkButton").innerHTML = "Turn off Dark Mode";
    }
    
}