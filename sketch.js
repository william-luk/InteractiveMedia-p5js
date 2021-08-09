let value = 0;
let rotationY;
let a = 1;
var textGraphic;
let font;
let array = [];
let movingCyl;

function preload() {
    font = loadFont('fonts/Inter-Regular-slnt=0.ttf');
}

function setup() {
    //    angleMode(DEGREES);
    smooth();
    pixelDensity(2.0);
    textFont(font);

    setTimeout(showName, 500);
    setTimeout(showCyl, 2000);
    setTimeout(hideStart, 4000);

    let canvas;
    canvas = createCanvas(windowWidth, 1000, WEBGL);
    //    rotationSlider = createSlider(1, 5, 1, 0);
    //    rotationSlider.position(10, height + 5);
    //    rotationSlider.style('width', '80px');
    canvas.parent('header');

    textGraphic = createGraphics(1600, 1000);
    textGraphic.background(0);
    textGraphic.rotate(radians(90));
    textGraphic.translate(510, 0);
    textGraphic.fill(255);
    textGraphic.textAlign(CENTER);
    textGraphic.textSize(80);
    textGraphic.textFont(font);
    //    textGraphic.text('Hi im William.', 0, 0);
    //    textGraphic.text('Hi im William1.', 0, -100);
    //    textGraphic.text('Hi im William2.', 0, -200);
    //    textGraphic.text('Hi im William3.', 0, -300);
    textGraphic.text('im an artist.', 0, -300);
    textGraphic.text('im a designer.', 0, -500);
    textGraphic.text('im a maker.', 0, -700);
    textGraphic.text('im a gamer.', 0, -900);
    //    textGraphic.text('Hi im William8.', 0, -800);
    //    textGraphic.text('Hi im William9.', 0, -900);
    //    textGraphic.text('Hi im Bim.', 0, 0);

    noLoop();
}



function draw() {

    //    background(200, 100, 50);
    background(0, 0, 0);
    smooth();
    //    angleMode(DEGREES);

    //    directionalLight(255, 255, 255, 467, 492, -2000);
    //    pointLight(255, 255, 255, 500, 500, 2000);
    //    pointLight(255, 0, 0, 500, 1000, 0);


    rotateZ(radians(-90));
    rotateY(radians(152));

    push();
    noStroke();
    //    rotationY = rotateY(mouseY / 100);

    //    if (pmouseY - mouseY > 0) {
    //        rotationY = rotateY(a++ * 0.1);
    //    } else if (pmouseY - mouseY < 0) {
    //        rotationY = rotateY(a-- * 0.1);
    //    } else if (pmouseY - mouseY == 0) {
    //        rotationY = rotateY(array);
    //    }
    rotationY = rotateY(map(mouseY / 100, radians(0), radians(360), radians(0), radians(100)));
    //    rotationY = rotateY(a++ * 0.01);
    //    rotationY = rotateY(a-- * 0.01);

    //    rotationY = rotateY(rotationSlider.value());
    texture(textGraphic);
    //    cylinder(200, 750, 24, 1);
    movingCyl = cylinder(200, 750, 50, 20);
    pop();

    print(a);
    print(array);

}

function mousePressed() {
    setTimeout(startShow, 2000);
    loop();
}

function mouseReleased() {
    noLoop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function showName() {
    let change = document.getElementById('headerName').style.opacity = 1;
}

function showCyl() {
    let change = document.getElementById('fillMid').style.opacity = 0;
}

function hideStart() {
    let change = document.getElementById('headerStart').style.opacity = 1;
}

function startShow() {
    let change = document.getElementById('headerStart').style.transition = "all 0.5s";
    let change2 = document.getElementById('headerStart').style.opacity = 0;
}
