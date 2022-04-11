Status = "";
fan_image = "";

function preload(){
    Tv_image = loadImage("TV.jpg");
}

function setup(){
    canvas = createCanvas(640,350);
    canvas.position(640,250);
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(Tv_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(Tv_image,0,0,640,350);
}