function setup() {
    canvas = createCanvas(550, 550);
    canvas.position(560, 100);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    background('#8abceb');
}
function modelLoaded() {
    console.log("Model Loaded!");
    console.log("Posenet Initialized");
}
function  gotPoses(results) {
    if (results.length>0) {
        console.log(results);
    }
}