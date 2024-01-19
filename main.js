noseX = 0;
noseY = 0;
difference = 0;
rightWrist = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotResults);
}

function modelLoaded() {
    console.log("Posenet is initialized!")
}

function draw() {
    background("grey");
    document.getElementById("wd").innerHTML = "width and height of the text is" + difference + "px";
    fill('#F90093');
    stroke('#F90093');
}

function textSize() {
    
}
function text() {
    text('text to be displayed', 30, 200)
    leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
}
function gotResults(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX= " + noseX + "noseY= " + noseY);
    }
}
function gotResults(results) {
    if (results.length>0) {
        console.log(results)
    }
}