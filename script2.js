let button;
let slider;
let distort;

function setup() {
   distort = new Tone.Distortion(1.8).toMaster();

    createCanvas(windowWidth, windowHeight);
    background('darkgrey');
    //create an object for each sound
    

    //  multiplayer = new Tone.Players({s
    //   sound1: "PouringWater.mp3",
    //   sound2: "Rain.mp3",
    //   sound3: "RunningWater.mp3",
    //   sound4: "Water.mp3",
    // }).toDestination();

    


   

    //Slider
    

    //Stop playing audio button

}

function loadSounds1(){
    player1 = new Tone.Player("PouringWater.mp3").toMaster();
    player2 = new Tone.Player("Rain.mp3").toMaster();
    player3 = new Tone.Player("RunningWater.mp3").toMaster();
    player4 = new Tone.Player("Water.mp3").toMaster();
}

function cButtons(loadSounds1){
    button1 = createButton("Pouring Water");
    button1.position(100, 100);
    button1.mousePressed(() => player1.start());
    button2 = createButton("Rain");
    button2.position(300, 100);
    button2.mousePressed(() => player2.start());
    button3 = createButton("Running Water");
    button3.position(470, 100);
    button3.mousePressed(() => player3.start());
    button4 = createButton("Water");
    button4.position(660, 100);
    button4.mousePressed(() => player4.start());
}

function dSounds(){
    distortionButton = createButton("Add distortion effect to sounds");
    distortionButton.position(355, 155);
    //distortionButton.mousePressed(distortSound);
    distortionButton.mousePressed(() => loadSounds.connect(distort));
}

function cSilder(){
    sliderForDistortion = createSlider(0, 15, 0.8, 0);
    sliderForDistortion.position(375, 200);
    text("Distortion Intensity", 385, 230);
}

function stopSounds(){
    stopbutton = createButton("Stop all sound");
    stopbutton.position(390, 265);
    //stopbutton.mousePressed(stop);
    stopbutton.mousePressed(() => loadSounds.stop());
}



function draw() {
    loadSounds1();
    cButtons();
    dSounds();
    cSilder();
    stopSounds();
}

// function stop() {
//     player1.stop();
//     player2.stop();
//     player3.stop();
//     player4.stop();
// }

// function distortSound() {
//     player1.connect(distort);
//     player2.connect(distort);
//     player3.connect(distort);
//     player4.connect(distort);
// }