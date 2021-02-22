let distort;

function setup() {
    distort = new Tone.Distortion(1.8).toMaster();
    bg = loadImage('waterBg.jpg');
    createCanvas(windowWidth, windowHeight);
   
    sound1 = new Tone.Player("PouringWater.mp3").toMaster();
    sound2 = new Tone.Player("Rain.mp3").toMaster();
    sound3 = new Tone.Player("RunningWater.mp3").toMaster();
    sound4 = new Tone.Player("Water.mp3").toMaster();

    button1 = createButton("Pouring Water");
    button1.position(50, 100);
    button1.mousePressed(() => sound1.start());
    button2 = createButton("Rain");
    button2.position(50, 125);
    button2.mousePressed(() => sound2.start());
    button3 = createButton("Running Water");
    button3.position(50, 150);
    button3.mousePressed(() => sound3.start());
    button4 = createButton("Water");
    button4.position(50, 175);
    button4.mousePressed(() => sound4.start());

    distortionButton = createButton("Add distortion effect to sounds");
    distortionButton.position(200, 100);
    distortionButton.mousePressed(distortSounds);

    ds= createSlider(0, 15, 0.8, 0);
    ds.position(400, 100);


    stopbutton = createButton("Pause Sounds");
    stopbutton.position(200, 150);
    stopbutton.mousePressed(stopSounds);
}

function stopSounds() {
  sound1.stop();
  sound2.stop();
  sound3.stop();
  sound4.stop();
}

function distortSounds() {
    sound1.connect(distort);
    sound2.connect(distort);
    sound3.connect(distort);
    sound4.connect(distort);
}
function draw() {
  background(bg);
  stroke(140);
  text("Distortion Slider", 415, 120);
}