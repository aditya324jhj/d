noseX=0;
noseY=0;

function preload() {
clown_nose = loadImage('https://i.postimg.cc/6qfYGrmS/unnamed-1.jpg')

}

function setup() {
    canvas  = createCanvas(300 , 300);
    canvas.center();
video = createCapture(VIDEO);
video.size(300,300); 
video.hide(); 


poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);
} 
function modelLoaded() {
    console.log("Posenet Is Initialized");
}
function draw() { 
image(video, 0,0,300,300);


image(clown_nose,noseX ,noseY , 20,20);
}
function take_snapshot() {
    save('clown face.png');
}


function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x-13;
        noseY = results[0].pose.nose.y-13;
        console.log("nose x =  " + noseX);
        console.log("nose y =  " + noseY);
  
    }
}