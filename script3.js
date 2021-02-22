//import * as Tone from 'tone';
let button1;
let slider;
var multiplayer;
//let baseURL = "https://s3-us-west-1.amazonaws.com/leesamples/samples/";
const sounds = new Tone.Players({
  sound1: "PouringWater.mp3",
  sound2: "Rain.mp3",
  sound3: "RunningWater.mp3",
  sound4: "Water.mp3"
}).toMaster();

function setup(){
  createCanvas(windowWidth, windowHeight);
  background('darkgrey');
  distort = new Tone.Distortion(1.8).toMaster();

//    multiplayer = new Tone.Players({
//     sound1: "PouringWater.mp3",
//     sound2: "Rain.mp3",
//     sound3: "RunningWater.mp3",
//     sound4: "Water.mp3",
//   }).toMaster();

            //   button1 = createButton('Play 1');
            //   button1.position(100, 40);
            //button1.mousePressed(() => multiplayer.player('sound1').start());

    button1 = createButton("sound");
    button1.position(100, 100);
    button1.mousePressed(() => sound1.start());
}

function draw(){
  
}

// function play1 (){
//   multiplayer.player('sound1').start();
// }

// function mousePressed(){
//     console.log("mouse is pressed");
//     sounds.player.get("sound1");
//     sounds.player.get("sound1").start();
// }

// function keyPressed(){
//   console.log(key);
//   if(key === ' '){
//     player1.stop();
//     player2.stop();
//   }
// }

// function setup() {
//   createCanvas(500, 500);
//   background(200, 230, 10);

//   // Test sound -> if you hear it everything is working
//   const synth = new Tone.Synth().toMaster();

//   synth.triggerAttackRelease('c4', '8n');

//   // p5 button
//   button = createButton('click me')
//   button.position(19, 19);
//   button.mousePressed(() => console.log('clicked!'));

//   // p5 slider
//   slider = createSlider();
//   slider.position(19, 50);
// }

// function draw() {
//   // print the value of the slider
//   console.log(slider.value());
// }
