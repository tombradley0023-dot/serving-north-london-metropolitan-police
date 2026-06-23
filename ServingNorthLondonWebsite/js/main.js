let playing = false;


function toggleMusic(){

    const music = document.getElementById("music");

    if(!music) return;


    if(playing){

        music.pause();

        playing = false;


    } else {


        music.play();

        playing = true;

    }

}