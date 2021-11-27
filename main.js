song_1=("Big_SHOT");
song_2=("Attack");

function preload()
{
song_1=loadSound("Big_SHOT");
song_2=loadSound("Attack");

}

function setup()
{
    Canvas=createCanvas(600 , 500);
    Canvas.center();
    video.hide();
    
    

}

function draw()
{
    image(video , 0 , 0 , 600 , 500);

}