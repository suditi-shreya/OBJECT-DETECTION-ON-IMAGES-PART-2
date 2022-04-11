Status = "";
fan_image = "";

function preload(){
    fr_image = loadImage("Fruit.jpg");
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
    object_Detector.detect(fr_image,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw(){
    image(fr_image,0,0,640,350);
}