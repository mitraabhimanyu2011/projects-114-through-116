function preload()
{

}

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 80, 60, 480, 360);
    filter(THRESHOLD);
    stroke("indigo")
    fill("black");
    circle(80, 60, 50);
    fill("red");
    rect(105, 50, 187.5, 20);
    fill("black");
    circle(317.5, 60, 50);
    fill("orange");
    rect(342.5, 50, 187.5, 20);
    fill("black");
    circle(555, 60, 50);
    fill("yellow");
    rect(546.25, 85, 20, 310);
    fill("black");
    circle(80, 420, 50);
    fill("green");
    rect(105, 410, 187.5, 20);
    fill("black");
    circle(317.5, 420, 50);
    fill("blue");
    rect(342.5, 410, 187.5, 20);
    fill("black");
    circle(555, 420, 50);
    fill("yellow");
    rect(70, 85, 20, 310);
    fill("black");
    circle(580, 100, 10);
    fill("black");
    circle(620, 100, 10);
    fill("black");
    circle(600, 130, 40);
    fill("white");
    stroke("white");
    rect(579, 109, 42, 20);
    stroke("indigo");
    fill("black");
    circle(15, 100, 10);
    fill("black");
    circle(55, 100, 10);
    fill("black");
    circle(35, 130, 40);
    fill("white");
    stroke("white");
    rect(14, 109, 42, 20);
}