window.addEventListener("load", addListeners);
var images = ["resources/hangmanHome.png", "resources/hangmanLogin.png", "resources/hangmanGame.png"]
var caption = ["Home page & high score table", "Login page", "Game being played"]
var index = 0;
var timer;

function addListeners(){

    document.getElementById("prev").addEventListener("click", function(){

        index--;
        if(index < 0){
    
            index = images.length - 1;
    
        }
        document.getElementById("picture").src = images[index];
        document.getElementById("caption").innerHTML = caption[index]; 

    });
    document.getElementById("next").addEventListener("click", changeImage);
}

function changeImage(){
	index++;
	if(index >= images.length){
		index = 0;
	}
	document.getElementById("picture").src = images[index];
    document.getElementById("caption").innerHTML = caption[index];
}