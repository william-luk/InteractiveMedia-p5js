let value = 0;
let rotationY;

let a = 1;

let textGraphic, fillGraphic;

let movingCyl, nameCyl;

function setup() {
    //    angleMode(DEGREES);
    smooth();
    pixelDensity(2.0);

    createCanvas(1000, 1000, WEBGL);
    rotationSlider = createSlider(1, 5, 1, 0);
    rotationSlider.position(10, height + 5);
    rotationSlider.style('width', '80px');


    textGraphic = createGraphics(1000, 1000);
    textGraphic.background(100);
    textGraphic.rotate(radians(90));
    textGraphic.translate(510, 0);
    textGraphic.fill(255);
    textGraphic.textAlign(CENTER);
    textGraphic.textSize(80);
    textGraphic.text('Hi im William.', 0, 0);
    textGraphic.text('Hi im William1.', 0, -100);
    textGraphic.text('Hi im William2.', 0, -200);
    textGraphic.text('Hi im William3.', 0, -300);
    textGraphic.text('Hi im William4.', 0, -400);
    textGraphic.text('Hi im William5.', 0, -500);
    textGraphic.text('Hi im William6.', 0, -600);
    textGraphic.text('Hi im William7.', 0, -700);
    textGraphic.text('Hi im William8.', 0, -800);
    //    textGraphic.text('Hi im William.', 0, -900);


    //    textGraphic.text('Hi im Bim.', 0, 0);

    noLoop();

}

function draw() {
    //    background(200, 100, 50);
    background(0);
    smooth();
    //    angleMode(DEGREES);

    rotateZ(radians(-90));

    push();
    //    noStroke();
    //    rotationY = rotateY(mouseY / 100);
    rotationY = rotateY(map(mouseY / 100, 0, windowWidth, 0, 500));
    translate(0, 0);
    rotationY = rotateY(rotationSlider.value());
    texture(textGraphic);
    //    cylinder(200, 750, 24, 1);
    movingCyl = cylinder(200, 750, 50, 20);
    pop();
}

function mousePressed() {
    rotationY = rotateY(mouseY / 100);
    loop();
}

function mouseReleased() {
    noLoop();
}
