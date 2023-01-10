var points = []
var mult = 0.001



function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
    background(30)
    angleMode(DEGREES)
    noiseDetail(1)

    var density = 50
    var space = width / density

    for (var x = 0; x < width; x += space) {
        for (var y = 0; y < innerHeight; y += space) {
            var p = createVector(x + random(-10, 10), y + random(-10, 10))
            points.push(p)
        }
    }
}

function draw() {
    noStroke()
    fill(255)

    for (var i = 0; < points.length; i++) {

        var r = map(points[i].x, 0, width, 50, 255)
        var g = map(points[i].y, 0, height, 50, 255)
        var b = map(points[i].x, 0, width, 255, 50)

        fill(r, g, b)

        var angle = map(noise(points[i].x, points[i].y), 0, 1, 0, 720)

        points[i].add(createVector(cos(angle), sin(angle)))

        ellipse(points[i].x, points[i].y, 1)
    }

}