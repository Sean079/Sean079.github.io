window.addEventListener("load", addListeners);
var images = ["tree/main/resources/SpeedStart.PNG", "tree/main/resources/SpeedCardChange.PNG", "tree/main/resources/SpeedWin.PNG"]
var caption = ["Start of game", "Card added to middle stack", "End of game"]
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