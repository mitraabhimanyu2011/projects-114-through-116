function preload()
{

}

function setup()
{
    canvas = createCanvas(300, 300, 1000, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{

}

function make_moustache()
{
    save("My Moustache Maker Image!.png");
}

function modelLoaded()
{
    console.log("PoseNet has been successfully initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);        
    }
}