let video = document.getElementById("video1")

function retroceder(){
    video.currentTime -= 15;
}

function play(){
    video.play()
}

function pausar(){
    video.pause()
    video.currentTime = 0;
}

function avançar() {
    video.currentTime += 15;
}